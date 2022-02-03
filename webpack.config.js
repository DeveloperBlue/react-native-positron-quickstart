const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);

const argv = require('minimist')(process.argv.slice(2));
const isElectron    = (argv && argv.target === 'electron-renderer');
const isDevelopment = (argv && argv.mode === 'development');

/********************************************************* */
/* OUTPUT CONFIGURATION ********************************* */

const PROJECT_BUNDLE_NAME = 'react-native-web-electron';

const ELECTRON_OUTPUT = {
    path: path.resolve(appDirectory, isDevelopment ? './electron-dev-live' : './electron'),
    filename: `${PROJECT_BUNDLE_NAME}.bundle.js`,
}

const WEB_OUTPUT = {
    path: path.resolve(appDirectory, './public'),
    filename: `${PROJECT_BUNDLE_NAME}.bundle.js`,
}

/********************************************************* */
/* PROJECT LIBRARIES AND ALIASES ************************ */

const PROJECT_ALIASES = {
    '@src' : path.resolve(__dirname, './src'),
    '@assets' : path.resolve(__dirname, './src/assets')
}

const COMPILE_NODEMODULES = [
  'react-native/Libraries',
  /*
   *    Include all your React-Native web-compilable modules here
  */
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));


/********************************************************* */
/* PLATFORM SPECIFIC EXTENSIONS ************************* */

const ELECTRON_EXTENSIONS = ['.electron.tsx', '.electron.jsx', '.electron.ts', '.electron.js'];
const WEB_EXTENSIONS = ['.web.tsx', '.web.jsx', '.web.ts', '.web.js', ]

/********************************************************* */
/* WEBPACK MODULES ************************************** */

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.js'), // Entry to your application
    path.resolve(__dirname, 'App.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    ...COMPILE_NODEMODULES,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[hash:8].[ext]',
      esModule: false,
    }
  }
};

const cssLoaderConfiguration = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
}

/********************************************************* */
/* WEBPACK CONFIGURATIONS ******************************* */

let options = {
  entry: {
    app: path.join(__dirname, 'index.js'),
  },
  output: isElectron ? ELECTRON_OUTPUT : WEB_OUTPUT,
  resolve: {
    extensions: [...(isElectron ? ELECTRON_EXTENSIONS : WEB_EXTENSIONS), '.tsx', '.jsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      ...PROJECT_ALIASES
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      cssLoaderConfiguration
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ]
};

let electron_preload_options = {
    entry: './electron-preload.js',
    target: 'electron-preload',
    output: {
        path: ELECTRON_OUTPUT.path,
        filename: `${PROJECT_BUNDLE_NAME}-preload.bundle.js`
    }
};

module.exports = isElectron ? [options, electron_preload_options] : options;
