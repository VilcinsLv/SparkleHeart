$("td").each(function() {
    if (this.innerText === '') {
    	this.closest('tr').remove();
    }
});

function check(){
	let div = document.getElementById("forum-checkbox");
	let checkbox = document.getElementById("accept-checkbox");
	    if (checkbox.checked === false){
	    	div.style.backgroundColor = "rgba(196, 196, 196, 0.4)";
	    } else {
	    	div.style.backgroundColor = "#FFA800";
	    }
}

function playPause() {
	let myVideo = document.getElementById("video");
	let button = document.getElementById("play-button");
	if (myVideo.paused) {
		button.style.display = "none";
		myVideo.play();
	}
	else {
		button.style.display = "inline";
		myVideo.pause();
	}
}

function open_menu() {
	let div = document.getElementById("overlay-menu");
	let cross = document.getElementById("nav-menu-cross");
	div.style.display = "block";
	cross.style.display = "inline";
}

function close_menu() {
	let div = document.getElementById("overlay-menu");
	let cross = document.getElementById("nav-menu-cross");
	div.style.display = "none";
	cross.style.display = "none";
}
