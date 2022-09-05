const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

// Choose a button and show it to a user

function nextSequence() {
  userClickedPattern = [];
  level++;

  $('#level-title').text(`Level ${level}`);
  const randomNumber = Math.trunc(Math.random() * 4);

  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

// Start a game by pressing a key

$(document).keydown(function() {
  $('#level-title').text("Level " + level);

  if(!started) {
    nextSequence();
    started = true;
  }
})

// Play sounds when a user clicks a button

$('.btn').on('click', function() {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $('#' + currentColor).removeClass("pressed"); 
  }, 100);
}
 
function playSound(name) {
  // Button sounds
  let sound = new Howl({
    src: ["sounds/" + name + ".mp3"],
  });
  
  sound.play();
}

// Check the user's answer against the game sequence

function checkAnswer(lastColor) {
  if (gamePattern[lastColor] === userClickedPattern[lastColor]) {

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    playSound("wrong");
    $('body').addClass("game-over");
    $('h1').text("Game Over, Press Any Key to Restart");
  
    setTimeout(function() {
      $('body').removeClass("game-over");
    }, 200);

    startOver();
  }
}

// Reset variables

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}