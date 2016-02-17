## Developer Week :: React Workshop

> delivered Wednesday, Feb 17, 2016  
> based on React 0.14  
> created by Sherif Abushadi (sherif@devbootcamp.com)  

---

### slides

[slides are here](https://docs.google.com/presentation/d/1ttAyxWIooMqY4tTHqlqTMk9dnhP4fWD-j7dmJwVQDvI/edit?usp=sharing)


### timing
- 9 am - 12 pm
- 3 x 50 min segments with 10 min breaks after each
- hands-on, bring your laptop


### outcomes
- you will be able to explain what React is and how it might have a place in your web application development story
- you will be able to read and understand the majority of React-specific source code of any web application that uses React
- you will be able to create your own custom components using several syntactic variants with ES5 and ES6
- you will be able to install and configure modern build tools for rapid development
- you will be able to discover and reuse publicly available React components in your own application
- you will be able to use the React Developer Tools to observe and modify component behavior in real time
- you will be able to modify an existing React application to suit your needs
- you will be able to incrementally introduce React to a static web application


### what's not included?
- anything about flux and [related implementations](https://github.com/voronianski/flux-comparison) (ie. alt, redux, etc.)
- anything about fundamental system setup (we assume you have npm installed and running)
- anything about cats because they already get enough attention as it is


### structure
- **part 1**: orientation
    - [10 mins] we begin with a brief overview of what React is exactly, the kinds of problems it was intended to solve and why so many experienced developers like it
    - [20 mins] next we take a look at the common patterns of creating, connecting and organizing React components including `React.createClass()`, extending `React.Component` and creating pure components using JavaScript functions
    - [20 mins] finally, you get to build your first React components using one of our ideas or your own as a target for development

- **part 2**: development
    - [10 mins] we open with a look at the importance of build tools including setting up webpack's hot module replacement to speed up your development experience
    - [10 mins] next, with your build process optimized, we invite you to sink smiling into the blissful world of "component kata"
    - [30 mins] finally, we practice building components using a well structured approach: [8-ways to communicate among components](http://andrewhfarmer.com/component-communication/) using only React and JavaScript

- **part 3**: maintenance
    - [10 mins] we end with an existing React application, one that we've seen before, and upgrade it from ES5 to ES6
    - [20 mins] next, choose a starter-kit, any starter-kit, and make it work
    - [20 mins] finally, choose one of either upgrading an outdated React application or starting to work your own idea with support


### installation

This repository has everything you need to get started so just
```bash
# clone the repo
git clone https://github.com/amgando/react-workshop.git

# cd into the folder
cd react-workshop

# install the dependencies
npm install

# start the server
npm start
```

*If for some reason you aren't able to run `npm`, the limited time in this workshop won't allow for us to troubleshoot your computer.  Instead, we have an online version available for you to use so you can keep up with the workshop without having to configure your machine.*


