# :rocket: HTML Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This repository contains a starter HTML boilerplate with SCSS, Bootstrap, jQuery, Tiny Slider, AOS (Animate On Scroll), and Gulp automations for common tasks like autoprefixing, concatenation, Sass compilation, minification, and file inclusion.

## Features

- Pre-configured with Bootstrap for responsive and mobile-first styling.
- Integrates jQuery for interactive and dynamic web elements.
- Includes Tiny Slider for creating image sliders and carousels.
- AOS library adds smooth animations as you scroll down the page.
- Gulp tasks automate repetitive tasks during development and build processes.

## Getting Started

Clone this repository to your local machine.

```
   git clone https://github.com/your-username/html-boilerplate.git
   cd html-boilerplate
```

Install the required dependencies using npm (Node.js is required).

```
npm install
```

Start the development server and Gulp tasks.

```
npm run dev
```

Your development server will be running at http://localhost:3000.

## Directory Structure

- `src/`: Contains the source files for your project.
- `index.html`: Main HTML file with file includes for better organization.
- `src/scss/`: Directory for SCSS styles.
- `src/js/`: Directory for JavaScript files.
- `src/assets/images/`: Directory for images.
- `build/`: Output directory where compiled and optimized files are generated.
- `gulpfile.js`: Gulp tasks configuration file.

## Gulp Tasks

- `gulp build`: Build the project for production.
- `gulp watch`: Watch for changes in SCSS and JavaScript files and run corresponding tasks.
- `gulp clean`: Delete the `dist/` directory.

## Dependencies

- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [jQuery](https://jquery.com/)
- [Tiny Slider](https://github.com/ganlanyuan/tiny-slider)
- [AOS](https://michalsnik.github.io/aos/)
- Gulp packages (automatically installed via npm):
  - `gulp-autoprefixer`: Adds vendor prefixes to CSS.
  - `gulp-concat`: Concatenates multiple files into one.
  - `gulp-sass`: Compiles SCSS to CSS.
  - `gulp-terser`: Minifies JavaScript.
  - `gulp-file-include`: Includes files into HTML.

## Author

- [Lalit Rane](https://lalitrane.dev)

## Contributing

Feel free to contribute to this

###License
This project is open source and available under the [MIT License](LICENSE).
