var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// Initialize the video element and turn off autoplay and turn off looping class is called video.
	video = document.querySelector("Video");
	video.load();
	video.loop = false;
	video.autoplay = false;

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


// Play Button Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

function updateVolume() {
	// knowing this is the volume input, how do I get the volume value "<input type="range" id="slider" min="0" max="100" value="100" step="10">"
	var volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	console.log("Volume: " + volume);
}

// Pause Button Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed: " + video.playbackRate);
}); 
// Speed Up Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed: " + video.playbackRate);
});
// Skip Ahead Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location: " + video.currentTime);
	if (video.currentTime < video.duration - 10) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
});

// Mute Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});
// Volume Slider Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("change", function() {
	updateVolume();
});
// Styled Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});
// Original Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});



