
let random = Math.floor(Math.random() * 100) + 1;
console.log(random); // cheat mode on
let count = 0;
resultEl = document.getElementById("result");

function guess(){
	count++;
	let userGuess = document.getElementById("ug").value;
	let picture = document.getElementById("im");
	
	if(userGuess == random){
		resultEl.textContent = "Well done. You guessed correctly. Refresh the web page to play again";
	}else{
		if(count == 6){
			resultEl.textContent = "You lose. Game over. Refresh the web page to play again";
		}else{
			if(userGuess < random){
				resultEl.textContent = "Too Low. Try again";
			}else{
				resultEl.textContent = "Too High. Try again";
			}
		}
		picture.setAttribute("src","hangman"+count+".jpg");
	}
}

document.querySelector("#hang").innerHTML = "<img alt=\"hangman picture\" src=\"hangmanStart.jpg\" width=\"300px\" height=\"300px\" id=\"im\"/>";