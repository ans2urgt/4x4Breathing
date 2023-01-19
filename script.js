const timer = ms => new Promise(res => setTimeout(res, ms))

let reset = false;

async function start(){
	let button = document.getElementById("submit")
	if (reset) {
		button.textContent = "Submit"
		reset = false;
		window.location.reload();
	} else {
		console.log(reset);
		button.textContent = "Reset"
		reset = true;
		const seconds = 1000;
		let cycles = Number(document.getElementById("cycles").value)
		if (cycles === 0) {
			console.log("Invalid input")
			return;
		}
		let text = document.getElementById("text");
		let secondsText = document.getElementById("seconds");
		let box = document.getElementById("box");
		// Do a count down
		for (let index = 3; index > -1; index--){
			text.innerHTML = "Starting loop in " + index;
			await timer(1000);
		}

		// calculate the total number of loops
		let = totalNumberOfLoops = cycles * 4;
		// do a for loop for the calculated number of loops
		// have an array with the values you want to use
		const sentences = ["Breathe In", "Hold", "Breathe Out", "Hold"]
		const borderSize = ["8px 1px 1px 1px","1px 8px 1px 1px","1px 1px 8px 1px","1px 1px 1px 8px"]

		for (let index = 0; index < totalNumberOfLoops; index++){
			// do a mod of the index by 4 to figure out which value to write
			let currentIndex = index % 4
			for (let second=4; second > 0; second--){
				text.innerHTML = sentences[currentIndex];
				secondsText.innerHTML = second;
				box.style.borderWidth = borderSize[currentIndex];
				await timer(seconds);
			}
		}

		text.innerHTML = "Great Job!";
		secondsText.innerHTML = "";
		box.style.borderWidth = "1px 1px 1px 1px";
		button.textContent = "Submit";
		reset = false;
	}
}