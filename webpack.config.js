const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);

const argv = require('minimist')(process.argv.slice(2));
const isElectron    = (argv && argv.target === 'electron-renderer');
const isDevelopment = (argv && argv.mode === 'development');

const project_bundle_name = require('./app.json').name;

/********************************************************* */
/* OUTPUT CONFIGURATION ********************************* */

const ELECTRON_OUTPUT = {
    path: path.resolve(appDirectory, isDevelopment ? './electron-app/webpack-dev-server' : './electron-app/build'),
    publicPath : './',
    filename: `${project_bundle_name}.bundle.js`
}

const WEB_OUTPUT = {
    path: path.resolve(appDirectory, './public'),
    publicPath : '/',
    filename: `${project_bundle_name}.bundle.js`
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
   *    Include all your React-Native web-compilable modules here.
   *
   *    This is needed for webpack to compile JavaScript.
   *    Many OSS React Native packages are not compiled to ES5 before being published.
   *    If you depend on uncompiled packages they may cause webpack build errors. 
   * 
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
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    app: path.join(__dirname, 'index.js'),
  },

  // configures where the build ends up
  output: isElectron ? ELECTRON_OUTPUT : WEB_OUTPUT,

  resolve: {
    extensions: [...(isElectron ? ELECTRON_EXTENSIONS : WEB_EXTENSIONS), '.tsx', '.jsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      ...PROJECT_ALIASES
    },
  },
  target : (isElectron) ? 'electron-renderer' : 'web',
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      cssLoaderConfiguration
    ],
  },
  devServer : {
    hot : true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, isElectron ? './index.electron.html' : './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ]
};

let electron_preload_options = {
    entry: './electron-app/electron-preload.js',
    target: 'electron-preload',
    output: {
        path: ELECTRON_OUTPUT.path,
        filename: `${project_bundle_name}-preload.bundle.js`
    }
    
};

module.exports = isElectron ? [options, electron_preload_options] : options;
