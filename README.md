## Julia Fractals

### Background
TESTING GH PAGES
A Julia set is a type of fractal. It is a set defined given a rational function (written J(f)). The Julia set consists of values such that an arbitrarily small perturbation can cause drastic changes in the sequence of iterated function values, known as chaotic behavior.

![Julia](images/julia.png)

### Functionality & MVP

With this Julia fractal visualizer, users will be able to:

 - See a visualize rendering of a given Julia function
 - Interact with an input field that will change the rendered fractal

### Wireframes

This app will consist of a single screen with a canvas, an user input area, and nav links to my Github and LinkedIn.
Users will be able to change the constants of the fractal equation in order to generate different images in the canvas.
Initially, this will happen in a fixed input field.
As a bonus feature, I hope to implement constant rendering where constants are based on mouse position.

![Wireframe](images/wireframe.png)


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be one script that handles the fractal calculation and pixel rendering

As a bonus feature, I would like to implement the rendering using `three.js`

### Implementation Timeline

**Phase 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Phase 2**: Research math necessary to calculate a Julia set. Begin writing julia.js script.
Goal of this phase is to fully understand and internalize the math concepts needed to calculate this type of fractal
Goal: for the day:

- Create a 3x3 pixel Julia fractal in JavaScript

**Phase 3**: Learn the `Easel.js` API. Connect Julia logic to easel canvas. Scale up Julia calculation and aim to keep it efficient. Goal for the day:

- Render simple Julia set on screen

**Phase 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: Change input from fixed inputs to dependent on move position, allow for constant rendering as mouse moves

### Bonus Features

- Fractal set determined by mouse position
- Fractal updates constantly as mouse moves
- Refactor rendering using three.js
