<h1 align="center">
  <a href="https://reactnative.dev/">
    React-Native-Positron Quickstart
  </a>
</h1>

<p align="center">
  <strong>Build native mobile applications, desktop applications, and web applications with React</strong>
</p>
<br>

React-Native-Positron (RNP) is a project that bundles React Native, React-Native-Web, and Electron. It allows you to build cross-platform applications for Android, iOS, Windows, MacOS, Linux, and the web— all from one codebase.

### Build
To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. You will also need to ensure your [React Native development environment](https://medium.com/r/?url=https%3A%2F%2Freactnative.dev%2Fdocs%2Fenvironment-setup) is set up and that you have a working Android or iOS device or emulator on hand.

From your command line:

```bash
# Clone the repository
git clone https://github.com/DeveloperBlue/react-native-positron-quickstart.git

# Navigate into the project
cd react-native-positron-quickstart

# Install project dependencies
npm install
```

### Run
In separate terminals, run the following:

```bash
# Start the Metro Bundler
npm start
```
```bash
# Run the webpack development server
npm run run:web
```
```bash
# Deploy the application to an Android device or emulator
npm run run:android

# Deploy the application to an iOS device or emulator
npm run run:ios
```
```bash
# Bundle and launch the Electron application
npm run run:electron
```
## Medium Project Writeup
You can read more about how RNP works and build your own application by checking out my [Project Writeup on Medium]().

If you're interested in the state of the application without Redux, SVG support, and electron build tooling, please see the medium-snapshot branch.
