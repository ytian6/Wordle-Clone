document.addEventListener("DOMContentLoaded", () => {

    /* array containing arrays of the letters guessed so far.*/
    let guessedLetters = [[], [], [], [], [], []];

    /* The index (0-29) of the current/next square to be filled */
    let indexOfSquareToFill = 0;

    /* The number of fully guessed words so far. */
    let guessedWordCount = 0;

    /* The html elements for all the keyboard keys. */
    const keys = document.querySelectorAll(".keyboard-row button");

    let mostRecentGuess = "No guesses have been made!";
    let wordToGuess = "There is no word to guess yet.";
    
    function getCurrentWordArray() {
	return guessedLetters[guessedWordCount];
    }

    function updateGuessedLetters(letter) {
	const currentWordArray = getCurrentWordArray();
	if (currentWordArray.length < 5) {
	    currentWordArray.push(letter);
	    const currentSquareElement = document.getElementById(String(indexOfSquareToFill));
	    currentSquareElement.textContent = letter;
	    indexOfSquareToFill += 1;
	}
    }

    function handleSubmitWord() {
	const currentWordArray = getCurrentWordArray();
	if (currentWordArray.length !== 5) {
	    window.alert("You must enter 5 letters before submitting!");
	} else {
   	    mostRecentGuess = currentWordArray.join("");
	    window.alert(`You guessed '${mostRecentGuess}'`);
 	    guessedWordCount += 1;
	} 
    }

    for (let i = 0; i < keys.length; i++) {
	keys[i].onclick = (event) => {
	    if (guessedWordCount === 6) {
		window.alert(`Sorry, you have no more guesses! The word is ${wordToGuess}.`);
		return;
	    } 
	    const keyValue = event.target.textContent;
	    if (keyValue === "Submit") {
		handleSubmitWord();
		return;
	    }
	    if (keyValue === "Del") {
		return;
	    }
	    updateGuessedLetters(keyValue);
	};
    }
});
