const generateNumber = document.querySelector("#generate-num");
const guessNumber = document.querySelector("#guess-num");
const generateInput = generateNumber.querySelector("input");
const guessInput = guessNumber.querySelector("input");
const guess = document.querySelector("#guess");
const result = document.querySelector("#result");
const playBtn = guessNumber.querySelector("button");

function play(event) {
    const genNum = generateInput.value;
    let randomNum = Math.ceil(Math.random() * genNum);
    event.preventDefault();
    const guessNum = guessInput.value;
    guess.innerText = `You chose: ${guessNum}, the machine chose: ${randomNum}`;
    if (parseInt(guessNum) === randomNum) {
        result.innerText = "You won!";
        playBtn.disabled = true;
    } else {
        result.innerText = "You lost!";
    };
};

guessNumber.addEventListener("submit", play);