# GIF Filter for Epileptics

This is a chrome extension for filtering gif images that might contain harmful strobes that can effect epileptics. It is to be used as a preventative measure against the individuals who attacked epileptics with strobing gifs in late 2019 https://newatlas.com/computers/epilepsy-foundation-twitter-strobe-seizure-gifs-law/

## Getting Started

This chrome extention was developed in JavaScript, it uses webpack, a popular JavaScript module bundler. The npm package [get-pixels](https://www.npmjs.com/package/get-pixels) is the backbone of this extension and is used to return the dimensions of an image using it's "src".

This README.md should give the reader the knowledge to setup a development environment for this application and give the reader a basic understanding on how to implement node modules on a chrome extension using webpack.

### Prerequisites

To run this project and follow this README.md the user will need:

* A unix-based operating system with a shell like Mac OS or Ubuntu
* Google chrome browser installed: install [here](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en)
* Familiarity with shell commands
* Familiarity with JavaScript
* Familiarity with Chrome extention development
* Familiarity with JavaScript package managers like npm and yarn
* Familiarity with webpack

You will also need to clone this repository to a project folder and ensure you're in the project folder:

```console
$ git clone https://github.com/Ethan-Potter/gif_filter_for_epileptics.git
$ cd gif_filter_for_epileptics
```

Useful tutorials and teaching tools for the aformentioned resources can be found here:
* [Unix Shell](https://www.youtube.com/watch?v=cQepf9fY6cE)
* [JavaScript](https://www.w3schools.com/js/)
* [Chrome Extention Development](https://developer.chrome.com/extensions/getstarted)
* [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)
* [yarn](https://riptutorial.com/yarn)
* [Webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle)

### Installing

The first thing that needs to be installed is google chrome, follow [this](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en) guide to do so on your operating system.

Next, you will need to install [npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable). Both are JavaScript package managers but yarn offers a little more utility than npm, read about the differences [here](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/).

To install on Mac OS use
```console
$ brew update
$ brew install node
$ brew install yarn
```

If brew isn't installed you can install it [here](https://brew.sh/).

If you are using a linux machine you'll need to clone the git repo for node.js and configure it to your machine. Follow [this](https://www.devroom.io/2011/10/24/installing-node-js-and-npm-on-ubuntu-debian/) guide to get npm for Ubuntu and [this](https://phoenixnap.com/kb/how-to-install-yarn-ubuntu) guide to get yarn for Ubuntu.

Finally, with chrome and your JavaScript package managers installed, you will now need to install dependencies and development dependencies for the extension and webpack by entering the following shell commands:

```
$ yarn add get-pixels webp-converter
$ yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader copy-webpack-plugin css-loader file-loader html-webpack-plugin style-loader webpack webpack-cli webpack-extension-manifest-plugin
```
These are the modules you'll need for the extension to run and development modules for using the development environment I'll be touching upon.

Your project directory should now look something like this:

```console
.
├── README.md
├── build/
├── chrome
│   ├── icons
│   │   ├── 128.png
│   │   ├── 16.png
│   │   └── 48.png
│   ├── manifest.json
│   ├── scripts
│   │   └── content.js
│   └── static
│       ├── index.css
│       ├── index.html
│       ├── index.js
│       ├── options.html
│       └── options.js
├── node_modules/
├── package.json
├── webpack.js
└── yarn.lock
```

## Setting up the Development Environment

Now, with the git repo cloned and the development dependencies installed, we can begin running the code in a development environment. Before we begin though, a basic understanding of what's going on under the hood is beneficial.

Currently there are a few important folders and files to note. First is the "chrome" folder, this contains all of the code necessary for the chrome extension, if there wasn't a need for external packages to be installed then the extension could be run off this code alone.

Next is "node_modules" folder, this was created in the installation process above. This contains all the dependencies for the extension and development environment to run. "yarn.lock" was also created at installation, this file simply locks the version of each package installed.

Next we have the "package.json" file, this is very important for running our development environment. The two "yarn add" commands we previously run in the installation process build the initial file and continue to add to the file as more dependencies are installed, though you've likely cloned the version availible on GIT as well. The version from the GIT REPO should contain the block:

```json
"name": "gif-filter-for-epileptics",
"version": "0.1.1",
"main": "webpack.js",
"scripts": {
  "dev": "NODE_ENV=development webpack --mode development --config webpack.js --watch"
},
```

This block contains information about the extension, the main webpack file "webpack.js" and a "dev" script for running [webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle). With this, we can run the "dev" script by entering:

```console
yarn dev
```

Into the console. This will make webpack bundle the extension into the "build" folder and add changes made to the extensions "build" folder when changes are made in the "chrome" folder.

The most complicated file is the "webpack.js" file, this is the configuration file for bundling our extention and it's dependencies into the "build" folder. The content of this file is beyond the scope of this README.md but to learn how to build your own "webpack.js" please refer to the extensive documentation on [webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle)'s website.

Once you run yarn dev, open chrome and navigate to "chrome://extensions", there toggle developer mode on the far right and then click "Load Unpacked Extension" on the left. When the window opens, select the build folder in your projects root directory. This will load the extention into your browser for prototyping and testing features.

### The Extension

The development of the chrome extension is contained in the "chrome" folder, for information beyond the scope of this README.md please refer to the chrome extension developer page [here](https://developer.chrome.com/extensions/devguide).

The main file of the extension is the "manifest.json" file. This file contains all the important information about the extension such as, for this project:
- Versioning
- Name
- Description
- Icon file paths
- Image file paths
- JavaScripts file reference content.js
- static file references index.css, index.html, index.js, options.html and options.js
- permissions to access other urls

The versioning, name, description and icon file paths are self explanatory.

The "content_scripts" key contains the content.js file. This is the JavaScript that can run on the page that is loaded by the user in chrome. The "matches" and "all_frames" keys indicate what urls and frames the script can run on respectively.

The "browser_action" key contains the "default_popup" keys that reference the "index.html" file. This is the html popup that gets loaded when the user clicks on the extension. the associated index.js and index.css files that are loaded with it are in the "chrome/static/" folder.

### How It Works

Currently the extension simply works by waiting for a webpage to be loaded, seeing if the user has the extension turned on, and replacing all 4 dimensional images (GIFs) into a picture of a cat. The images are 4 dimensional because a GIF array has 2 dimensions for its x and y axis, 1 for the animation frame and 1 for the colour channel (RGB).

See the "content.js" file for more information on how this works on each webpage loaded. See "index.js" and "index.html" for information on how the extension popup works.

## Built With

* [JavaScript](https://www.javascript.com/)
* [webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle)
* [google chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en)
* [npm](https://www.npmjs.com/get-npm)
* [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Authors

* **Ethan Potter** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Future Version Work

- That websites like GIPHY use .webp image extensions which the "get-pixels" can't handle. Current fix is to search for string ANMF in webpack files. Need to explore how get-pixels works and build function for getting webp pixels google documentation on webp files may be useful https://developers.google.com/speed/webp/docs/using
- Seems to be some issues with the mutation events. All necessary mutations are captured but it doesn't always change the mutation if it occurs. Perhaps there needs to be a wait time until the mutated element exists.
- Implement drag and drop feature for user to upload their own pictures
