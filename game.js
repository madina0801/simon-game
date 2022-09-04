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

  playSound(randomChosenColor);
}

// Start a game by pressing a key

$('html').keydown(function() {
  $('#level-title').text('Level 0');

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
  checkAnswer(userClickedPattern.length - 1);
});
 
function playSound(name) {
  // Make buttons flash
   $("#" + name)
  .fadeOut(100)
  .fadeIn(100);
  // Button sounds
  let sound = new Howl({
    src: ["sounds/" + name + ".mp3"],
  });
  
  sound.play();
}

// Check the user's answer against the game sequence

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    } else {
      console.log("wrong");
      const wrongSound = new Howl({
        src: ['sounds/wrong.mp3'],
      });
      wrongSound.play();
    }
  }
}

// Reset variables

function startOver() {
  level = 0;
  gamePattern = [];
  pressed = false;
}