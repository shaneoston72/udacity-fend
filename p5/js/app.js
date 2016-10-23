/* Creates a random type enemy to which speed can be assigned.
 * Given two values, min & max, generates a number between the
 * two. Used example from developer.mozilla.org (Math.random()).
 */
var random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Heart for lives count
var heart = '<img src="images/Heart.png">';

// Enemy class and prototype functions
var Enemy = function() {
  // Generates a random number to assign to bug as a type
  this.type = random(1,5);
  // Specifies the image to use for the bug
  this.sprite = 'images/enemy-bug.png';
  // Sets the position of the bug on the x-axis
  this.x = this.type *  -101;
  // Sets the position of the bug on the y-axis
  this.y = random(0, 3) * 83 + 54;
  // Sets a random speed at which the bug moves across the board
  this.speed = this.type * 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;

  /* Removes the bug when it reaches the right edge of the
  * board and adds another.
  */
  for (var enemy = 0; enemy < allEnemies.length; enemy++) {
    if (allEnemies[enemy].x > 505) {
      allEnemies.splice(enemy, 1, new Enemy());
    }
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player class and prototype functions
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = random(0, 4) * 101;
  this.y = 404;
  this.lives = [heart, heart, heart];
  this.score = 0;
  document.getElementsByClassName('lives')[0].innerHTML = 'Lives: ' + this.lives.join(' ');
  document.getElementsByClassName('score')[0].innerHTML = 'Score: ' + this.score;
};

Player.prototype.update = function() {
  // Checks for collisions and, upon collision, resets game
  for (var enemy = 0; enemy < allEnemies.length; enemy++) {
    if (Math.abs(allEnemies[enemy].x - this.x) < 50 &&
        Math.abs(allEnemies[enemy].y - this.y) < 66) {
          this.lives.pop();
          // checks if any lives left; if not, game over; if yes, resets
          if (this.lives.length === 0) {
            this.gameOver();
          } else {
            this.reset();
          }
    }
  } // scores a point if the player reaches the water
  if (this.y <= 0) {
    this.score += 1;
    this.reset();
  }
};

// Ends the game and resets it to its start
Player.prototype.gameOver = function() {
  var gameOver = alert('Game Over!  Press OK to play again.');
  player = new Player();
};

// Resets player to bottom row
Player.prototype.reset = function() {
  document.getElementsByClassName('score')[0].innerHTML = 'Score: ' + this.score;
  document.getElementsByClassName('lives')[0].innerHTML = 'Lives: ' + this.lives.join(' ');
  this.x = random(0,4) * 101;
  this.y = 402;
}

// Draws the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Moves a Player instance according to keyboard input
Player.prototype.handleInput = function(keycode) {
  if (keycode === 'up' && this.y > 44) {
    this.y -= 83;
  } else if (keycode === 'left' && this.x > 83) {
    this.x -= 101;
  } else if (keycode === 'right' && this.x < 404) {
    this.x += 101;
  } else if (keycode === 'down' && this.y < 332) {
    this.y += 83;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
