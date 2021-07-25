# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Running the project](#running-the-project) -[Available Scripts](#available-scripts)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

#### Desktop

![](./desktop.jpg)

#### Mobile

![](./mobile.jpg)

### Links

- [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/mobile-first-using-react-typescript-and-sass-HncQVPbmC)
- [Live Site](https://alexandroperez.github.io/stats-preview-card-component/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Create React App](https://create-react-app.dev/) - Tool to quickly set up a Reat app
- TypeScript components
- [Sass](https://https://sass-lang.com/) [**_Modules_**](https://css-tricks.com/css-modules-part-1-need/) - For component styles
- [Storybook](https://storybook.js.org/) - Tool for building UI components and pages in isolation

### What I learned

#### Regular Expressions

I learned how to use a single regular expression to build a very simple text parser for the title of the Card. Instead of asking for html input, I decided to support **\*\*MD bold syntax\*\*** for making the text change color within the title.

The following regular expression allowed me to parse the text and then return it with the proper html syntax as needed:

```ts
// src/components/Card/parse-helper.tsx
/**
 * regexp to check if there are any words that match markdown bold pattern
 * tab, linefeed, carriage return, and single "*" characters are ignored.
 */
const regexp = /\*{2}([^\t\n\r*]*)\*{2}/g;
```

The regular expression looks for any text that matches the MD style bold pattern, ignoring tabs, linefeeds, carriage returns, and single `*` asteriks. During testing it worked as intended, so it may not be fool proof.

> I also learned there is no need to escape characters inside square brackets `[]` in a regular expression. In the expression above you'll notice the asterisk enclosed in the square brackets is not being escaped (`*` instead of `\*`).

### Continued development

Since I'm just getting started with React, TypeScript and Sass, I'd like to continue building projects using these tools in the future. Along the way there are few things I'd like to keep working on, some of the being:

#### TypeScript Type Checking vs PropTypes

I really liked how TypeScript allowed me to avoid having to rely on PropTypes, and being able to get warning errors while writing the code using IntelliSense, makes it seem like the better choice.

But according to [this article](https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/#enjoyingthebestofbothworlds), it may not be a bad idea to enjoy the best of both worlds. This way we can get error handling doring compile time with TypeScript, and during runtime with PropTypes. This will be specially useful when relying on 3rd party APIs, since TypeScript cannot type-check data comming from them. Runtime error handling is PropTypes field.

That being said, I'd still prefer to use TypeScript, so the approach I'd like to use is to use a plugin like [babel-plugin-typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes).

#### Storybook

For this project, I installed Storybook right after I finish building the components. There is still more I need to learn from this tool.

One problem I ran while installing storybook into this app, was that there were dependency problems, more specifically `babel-loader`. Right after installing storybook, `yarn start` complained about `babel-loader` being a different version than the one required by `create-react-app`. I had to use an `.env` file with the quick fix mentioned during the error log to get it working again.

Unfortunately it seems storybook doesn't play well with Create react app, since they have had [this issue since 2019](https://github.com/storybookjs/storybook/issues/5183), and it remains open and unfixed. I'll have to see how using storybook alongside create react app goes then...

### Useful resources

- [**Regexr**](https://regexr.com/) For testing regular expressions

## Author

- Frontend Mentor - [@AlexandroPerez](https://www.frontendmentor.io/profile/AlexandroPerez)

## Running the Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can clone this project, and use `yarn install` to run it locally.

If you'd rather use npm, just run `npm install` and remember to delete `yarn.lock`. You'll have to use `npm` command instead of `yarn` with the available scripts.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run storybook`

Run this script if you want to start the storybook local server.

### `yarn run build-storybook`

Run this script to build your static storybook pages in `build/storybook`. This will allow you to deploy both your react app, and your storybook into Github Pages.

### `yarn run deploy`

This project uses [gh-pages](https://www.npmjs.com/package/gh-pages) to deploy a your static build to GitHub pages. This will create your build in the `./build`folder.

Before deploying make sure:

- To run `yarn build` and `yarn run storybook` (if you want to have storybook in your static site)
- That you have your own Github fork of this project, and that you have set it up as the `origin` of your local setup.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
