![react-redux-starter](https://user-images.githubusercontent.com/33935506/36640376-e23a592e-1a25-11e8-9567-ec4622684159.png)

# React Starter

A basic template that consists of the essential elements that are required to start building a Single Page Application using React, React Router, Redux, Bootstrap 4, Sass, and Webpack.

Although I am calling this project a template of sorts, it is also a mini application in that it demonstrates a full verticle slice of the architecture. What this means, is that there is an example of Redux and React-Router in action. I kept the example simple by providing data via a _'Zip Code JSON file'_.

The template consists of:

* a typcial project layout structure
* a Babel setup and configuration
* a Webpack setup and configuration
* an ESLint setup and configuration
* a SCSS setup and configuration
* a sample React component to display list codes
* a Redux setup to handle zip codes state
* a React Router setup to show basic navigation

Additionaly, the template provides a development and production webpack configuration.

The template also allows one to include specific plugins as part of build. [Please see here for more detail](#build-application-with-bundleanalayzer-plugin-included)

---

## Showcase

### Desktop

![desktop](https://user-images.githubusercontent.com/33935506/36639642-ce08ea3a-1a19-11e8-8f97-0bcb29276aaf.gif)

### Mobile

![mobile](https://user-images.githubusercontent.com/33935506/36639643-ce440ad4-1a19-11e8-9728-3a4b5f1bd800.gif)

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [React Router] - Declarative routing for React
* [Redux] - Redux is a predictable state container for JavaScript apps.
* [Redux-Promise-Middleware] - Redux middleware for promises, async functions and conditional optimistic updates
* [Redux-Thunk] - Thunk middleware for Redux
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge] - Static web publishing for Front-End Developers

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application
  
* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

* [react-redux-quotlify]

  A quote browser and manager that allows one to search famous quotes and save them to a data store.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

### Install

Follow the following steps to get development environment running.

* Clone _'react-redux-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-redux-starter.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-redux-starter.git
  ```

* Install node modules

   ```bash
   cd react-redux-starter
   npm install
   ```

### Build

#### Build Application

dev | prod
:---: | :---:
npm run build:dev | npm run build:prod

#### Build Application And Watch For Changes

dev | prod
:---: | :---:
npm run build:dev:watch | npm run build:prod:watch

#### Build Application With BundleAnalayzer Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundleanalyze | npm run build:prod:bundleanalyze

After running the above command, a browser window will open displaying an interactive graph resembling the following image:

![webpack bundle analyzer](https://user-images.githubusercontent.com/33935506/36639476-30f9479c-1a16-11e8-9d09-1b80355a089b.png)

#### Build Application With BundleBuddy Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundlebuddy | npm run build:prod:bundlebuddy

### Run ESlint

#### Lint Project Using ESLint

  ```bash
  npm run lint
  ```

#### Lint Project Using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

#### Run Start

This will run the _'serve:dev'_ npm task

```bash
npm start
```

#### Run Dev Server

```bash
npm run serve:dev
```

#### Run Dev Server With Dashboard

```bash
npm run serve:dev:dashboard
```

The above command will display a dashboard view in your console resembling the following image:

![webpack-dashboard](https://user-images.githubusercontent.com/33935506/36639594-589409e8-1a18-11e8-84fe-29f7bdafcaa6.png)

#### Run Prod Server

This command will build application using production settings and start the application using _live-server_

```bash
npm run serve:prod
```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-redux-starter/tags).

---

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[Redux-Promise-Middleware]: https://github.com/pburtchaell/redux-promise-middleware
[Redux-Thunk]: https://github.com/gaearon/redux-thunk
[React Router]: https://reacttraining.com/react-router/
[Redux]: https://redux.js.org/
[Surge]: https://surge.sh/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard
[react-redux-quotlify]: https://github.com/drminnaar/react-redux-quotlify