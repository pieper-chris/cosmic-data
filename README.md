# Cosmic-Data
Personal React application for dynamically loading space data.

**View hosted application at (_https://cosmic-data.herokuapp.com_)**

Please note the following:

*-This application is using free "[dyno hours](https://devcenter.heroku.com/articles/free-dyno-hours)" provided by Heroku. Therefore, if this calculator application receives no web traffic in a 30-minute period, it will sleep (idle). When sleeping, any user who connects will experience a delayed initial load/start up. In my experience, this delay should not last longer than 8-10 seconds.*


## About

This web application provides a unique dark-mode experience for viewing public data relating to space. For those who like dashboard aesthetics, but with interesting information, this application may be of interest to you. Featuring a spinning globe, this real-time interface is a great placeholder for a dark theme on your monitor. As just the 2nd version of this web application, expect much improved features and additions in the future (see "Future Work").

## Background

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed to Heroku. It is important to note that for successful deployment of this React application to Heroku, the following terminal command was necessary before a successful Heroku build:

```
heroku buildpacks:set https://github.com/mars/create-react-app-buildpack
```
For more information about this command, you may find [this article]( https://medium.com/@alberto.carlos/deploying-a-react-application-on-heroku-70155d147ce4) helpful.

## Current Version 2.0

### What's New

-UI Improvements:


![Error Loading Gif](https://github.com/pieper-chris/cosmic-data/blob/master/gifs/cosmic2.gif)

```
- New SpaceX recent launch feature
- Mobile compatibility improvements, as promised.
- Security patches
    - Addressed unique key allocation using cryptographically strong random values.
    - https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
```

### Previous version 1.2
![Error Loading Gif](https://github.com/pieper-chris/cosmic-data/blob/master/gifs/cosmic1.gif)


```
- Security Patches
```

### Future Work
This application is very minimalistic, but representative of the tools React provides. In the future, expect the minimalistic feel to stay, but with a dense addition of new features and data to explore. The layout may also change to further satisfy the goal of a true dashboard feel. Also expect improved compatibility for mobile devices.

In the meantime, this application should be up and working well. If you have any issues with this application, please contact me [here](https://clpieper.com/contact.html).


### Documentation
For any visitors of this page, I am still new to front-end development even after my computer science degree, which is very deeply concerned with theory, mathematics, and back-end development. I still have much to learn, but that's what is exciting! The major pillars of personal inspiration and instruction behind this application's design/deployment are contained within the following links:

- https://api.nasa.gov/
- https://github.com/r-spacex/SpaceX-API
- https://github.com/vasturiano/react-globe.gl




# Full React Documentation


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
