# Melodo

A mini-application for managing Todos.
Live demo: [http://wholesale-direction.surge.sh/](http://wholesale-direction.surge.sh/)

Git repo: [https://github.com/larry-dalmeida/trivago-javascript-assignment](https://github.com/larry-dalmeida/trivago-javascript-assignment)

_Please note: The demo of the application has been deployed on a free tier instance of Surge.sh, so it can take up to 30 seconds or more to awaken and load._

## Tasks Implemented

All of the mandatory and optional tasks have been implemented. You can see their indiviual implementations by looking at the Git branches named after the task.

* WEB-101: Support enter key for add todo field
* WEB-102: Adding a new todo causes text field focus to be lost
* WEB-103: Add status filtering test
* WEB-104: Change filter position test
* WEB-110: Improve visual appearance
* WEB-120: Save users todo items
* WEB-201: Extract CSS into separate file
* WEB-202: Optimized bundle generation
* WEB-203: Replace lib/state.js
* WEB-301: Optimize the view rendering
* WEB-302: Static feature compilation
* WEB-303: Improve developer experience

## Technology Colophon

* Melody.js
* Redux
* SASS

## Getting Started

### Navigating the directories

* `src` contains all the source code for the application
* `utils` contains custom loaders for webpack
* app starts in `lib/index.js`

### Installing & Running

Navigate to `<root>/TodoList` and:

`npm install`

To start the application in development mode:

```
npm start
```

### Deployment

Production builds can be generated and deployed using the following NPM scripts:

```
npm build
npm deploy
```

### Enabling Filters during compile time

To start the application with filters enabled in development mode:

```
npm run start:enable-filter
```

To build with filters enabled:

```
npm run build:enable-filter
```
