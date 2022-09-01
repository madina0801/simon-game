const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  const randomNumber = Math.trunc(Math.random() * 4);
		
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
		
  // Make buttons flash
		
  $("#" + randomChosenColor)
		.fadeOut(100)
		.fadeIn(100);
		
  // Button sounds
		
  let sound = new Howl({
			src: ["sounds/" + randomChosenColor + ".mp3"],
  });
		
  sound.play();
		
		return randomNumber;
	};

nextSequence();

// const blueAudio = new Audio('sounds/blue.mp3');
// blueAudio.play();
