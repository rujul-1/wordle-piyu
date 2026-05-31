const answers = [

    "cutie",
    "smile",
    "piyuu",
    "rurii",
    "haguu",
    "loved",
    "snowy",
    "pillu",
    "vadas",
    "smolu",
    "chikn",
    "shobi",
    "popdi",
    "sweet"

];

const secretWord =
    answers[Math.floor(Math.random() * answers.length)];

console.log(secretWord);

let currentRow = 0;

const board =
    document.getElementById("board");

for(let r=0; r<6; r++) {

    const row =
        document.createElement("div");

    row.classList.add("row");

    for(let c=0; c<5; c++) {

        const tile =
            document.createElement("div");

        tile.classList.add("tile");

        row.appendChild(tile);
    }

    board.appendChild(row);
}

const messages = [

    "Haguuu",
    "Nahi hogaaa",
    "Help lele meri",
    "Give up poopdi",
    "HAHAHAH",
    "HAGUDI"

];

function submitGuess() {

    let guess =
        document
        .getElementById("guessInput")
        .value
        .toLowerCase();

    if(guess.length !== 5) {

        alert("5 letters only poopdi");

        return;
    }

    let row =
        document
        .getElementsByClassName("row")[currentRow];

    let colors =
        Array(5).fill("gray");

    let remaining =
        secretWord.split("");

    // Greens

    for(let i=0;i<5;i++) {

        if(guess[i] === secretWord[i]) {

            colors[i] = "green";

            remaining[i] = null;
        }
    }

    // Yellows

    for(let i=0;i<5;i++) {

        if(colors[i] === "green")
            continue;

        let idx =
            remaining.indexOf(guess[i]);

        if(idx !== -1) {

            colors[i] = "yellow";

            remaining[idx] = null;
        }
    }

    for(let i=0;i<5;i++) {

    let tile = row.children[i];

    tile.textContent =
        guess[i].toUpperCase();

    setTimeout(() => {

        tile.classList.add("flip");

        tile.classList.add(colors[i]);

    }, i * 300);
}

    if(guess === secretWord) {

    setTimeout(() => {

        document
        .getElementById("message")
        .innerText =
        "Congratulations! Still not better than me tho.";

    }, 1700);

    return;
}

    currentRow++;

    if(currentRow < 6) {

        document
        .getElementById("message")
        .innerText =
        messages[currentRow];
    }

    else {

        document
        .getElementById("message")
        .innerText =
        "Game Over poopdi. Word was " +
        secretWord;
    }

    document
        .getElementById("guessInput")
        .value = "";
}

document
    .getElementById("guessInput")
    .addEventListener("keydown", function(event) {

        if(event.key === "Enter") {

            submitGuess();
        }
    });