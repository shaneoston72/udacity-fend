## Website Performance Optimisation portfolio project

### To view the production code:
* Download the `dist` folder.
* Start a local web server in the downloaded directory.
* View the site in a web browser.
* To rate the site through PageSpeed Insights, start ngrok with `./ngrok http 8000` (note the port is provided by your local web server) and use the url provided.

### Installation instructions to use all source code and create production code
* Install node by downloading and running node from (nodejs.org)[https://nodejs.org].
* Run ```npm install npm -g``` at the command line to get the latest version. Note that you may need to run ```sudo npm install npm-g``` depending on your system.
* Clone this project from (GitHub)[].
* Change the cloned directory.
* Run ```npm install``` to get project dependencies.

### Steps to optimise index.html:
#### PageSpeed score of 90 for index.html
* moved all source files into 'src' directory.
* Installed ngrok to src and dist directories to compare pagespeed scores between source and optimised files.
* Installed gulp.
* Resized pizzeria.jpg to 200 px.
* Changed link to Google Web Fonts to Web Fonts script.
* Made javascript scripts async.
* Optimised files by minifying src files.

Result: Mobile score of 97 and desktop of 91.

### Frame rate
* Changed `updatePositions` function so that `mover` elements are selected by class name.
* Added a new for loop to calculates phase and pushes it an array.
* Updated main loop in the function to access each element in the phase array.
* Moved `pizzaDivs` out of the `for` loop.
* Changed the number of pizzas generated to depend on window height (source: https://github.com/talongi/udacity-p4-website-optimization).
* added `backface-visibility` to `mover` class.
* added `transform` and `will-change` to `randomPizzaContainer` class.

### Computational efficiency
In the function `changePizzaSizes`:
* defined three variables that removed the defined values from the`for` loop.
* changed the selection of `randomPizzaContainer` elements by class  name
