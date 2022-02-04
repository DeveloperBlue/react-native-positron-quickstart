# React-Native-Web-Electron Template
React-Native-Web-Electron (RNWE) is a project that bundles React Native, React-Native-Web, and Electron. It allows you to build cross-platform applications for Android, iOS, Windows, MacOS, Linux, and the web— all from one codebase.

## Build
To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone the repository
git clone <repo>

# Navigate into the project
cd React-Native-Web-Electron

# Install project dependencies
npm install
```
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

You can read more about how RNWE works and build your own application by checking out my [Project Writeup on Medium]().