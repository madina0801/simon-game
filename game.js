const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const btns = $('.btn');

// Choose a button and show it to a user

function nextSequence() {
  const randomNumber = Math.trunc(Math.random() * 4);

  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    
    return randomNumber;
}

// Play sounds when a user clicks a button

btns.on('click', function() {
  const userChosenColor = $(this).attr("id");
  playSound(userChosenColor);
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





nextSequence();

// const blueAudio = new Audio('sounds/blue.mp3');
// blueAudio.play();
