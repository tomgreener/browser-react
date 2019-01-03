# browser-react :earth_americas:
An up-to-date example implementation of React for the browser. Use for building applications or as a reference implementation.

![Dependencies up to date](https://david-dm.org/tomgreener/browser-react.svg)
![Known Vulnerabilities](https://snyk.io/test/github/tomgreener/browser-react/badge.svg?targetFile=package.json)
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/issues/)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)

## Quick Overview

### Development
Single command builds, opens and live reloads a Webpack development server (at http://localhost:3000/).
#### npm
`npm run dev`
#### Yarn
`yarn dev`

### Production
Builds and minifies your application, ready for deployment to a production server.
#### npm
`npm run build`
#### Yarn
`yarn build`

## What's included?
This project contains the keys things you'll likely need to get started on a new client-side React project:

- [React Router](https://github.com/ReactTraining/react-router)
- [React Redux](https://github.com/reduxjs/react-redux)
- [SASS](https://sass-lang.com/guide)

As well as some useful extras:

- Hot reloading server for development
- JS and CSS optimisation for production (more info below)
- Babel and Webpack transpiling (is this optimised for browser though? possibly not)
- [Airbnb](https://github.com/airbnb/javascript/blob/master/.editorconfig) `.editorconfig`

### Tell me more about that optimisation
Optimisation of `.js` files is done using the [UglifyJS](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) plugin for Webpack and by setting the correct Webpack build `mode`.

Optimisation of the `main.css` file, which contains the application's compiled SCSS code, is done using PostCSS and [Webpack PostCSS loader](https://github.com/postcss/postcss-loader). The following PostCSS plugins are used:

- `autoprefixer` - adds necessary vendor prefixes
- `css-mqpacker` - combines same media query rules into one (for neatness)
- `postcss-combine-duplicated-selectors` - combines duplicated selectors into one
- `cssnano` - minifies

## Anything else to come?
Some things I may add in future are:

- [Seperate `vendor.js` script for production](https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#5-commonschunkplugin-for-vendor-caching), containing `react`, `react-dom` and `react-router` packages
- Filename hashing, to allow more effective script caching in production

##### Preact
If you don't need the more advanced features of React, I recommend [switching it with Preact](https://preactjs.com/guide/switching-to-preact). This is very quick to do and can greatly reduce the size of the `client.js` script sent to the user.

## License
MIT
