const boxes = document.querySelectorAll("#grid div");
const resetButton = document.getElementById("reset");
const resetScoreButton = document.getElementById("resetScore");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let scores = { X: 0, O: 0 };

function handleClick(event) {
    const index = Array.from(boxes).indexOf(event.target);
    if (board[index] === "") {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add(currentPlayer.toLowerCase());
        setTimeout(() => {
            if (checkWin(currentPlayer)) {
                alert(`Player ${currentPlayer} wins!`);
                scores[currentPlayer]++;
                updateScoreboard();
                resetBoard();
                return;
            }
    
            if (!board.includes("")) {
                alert("It's a draw!");
                resetBoard();
                return;
            }
    
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        },10)
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === player)
    );
}

function updateScoreboard() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}

function resetBoard() {
    board.fill("");
    boxes.forEach(box => {
        box.textContent = "";
        box.classList.remove("x", "o");
    });
    currentPlayer = "X";
}

function resetScore() {
    scores.X = 0;
    scores.O = 0;
    updateScoreboard();
}

boxes.forEach(box => box.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetBoard);
resetScoreButton.addEventListener("click", resetScore);