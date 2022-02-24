<h1 align="center">
  <a href="https://github.com/DeveloperBlue/react-native-positron-quickstart">
    React-Native-Positron Quickstart
  </a>
</h1>

<p align="center">
  <strong>Build native mobile applications, desktop applications, and web applications with React</strong>
</p>

![Snapshot of React Native Positron running in React Native, Electron, and the web](https://github.com/DeveloperBlue/react-native-positron-quickstart/blob/main/repository-banner.png)

React-Native-Positron (RNP) is a project that bundles React Native, React-Native-Web, and Electron. It allows you to build cross-platform applications for Android, iOS, Windows, MacOS, Linux, and the web— all from one codebase.


------


<h2 align="center">
  <strong>⚠️ You are on the Medium-Snapshot Branch ⚠️</strong>
</h2>


This branch is a snapshot from the Project Writeup on Medium.
It is a boilerplate project with no Redux, SVG Support, or Electron build tooling. If you want these features and more, please switch to the main branch.

------

## Build
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

## Run
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
You can read more about how RNP works and build your own application by checking out my [Project Writeup on Medium](https://medium.com/@michaelrooplall/building-cross-platform-applications-for-android-ios-windows-macos-linux-and-the-web-using-2586fdb2e3da).

This branch is a snapshot from the Project Writeup on Medium.
If you are looking for the more developed boilerplate, please switch to the main branch.
