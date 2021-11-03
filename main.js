var turn = 0;
const winnings = {
  X: 0,
  O: 0,
};
var winFlag = 0;
const board = document.querySelectorAll(".box");
const inBoard = document.querySelectorAll(".box_text");

function winScript(c1, c2, c3) {
  colorTheWinner(c1, c2, c3);
  winChanges();
}

function winChanges() {
  winFlag++;

  const textContainer = document.querySelector(".text_msg_container");
  textContainer.style.visibility = "visible";
  if ((turn % 2) + 1 === 1) {
    textContainer.children[1].innerHTML = "X";
    textContainer.children[1].style.color = "green";
    winnings["X"]++;
  } else {
    textContainer.children[1].innerHTML = "O";
    textContainer.children[1].style.color = "red";
    winnings["O"]++;
  }
}

function resetChanges() {
  const textContainer = document.querySelector(".text_msg_container");
  textContainer.style.visibility = "hidden";
}

function colorTheWinner(c1, c2, c3) {
  const a = {
    c1: c1,
    c2: c2,
    c3: c3,
  };

  for (var i = 0; i < 3; i++) {
    inBoard[a["c" + (i + 1)]].style.color = "red";
  }
}

function resetButton() {
  var resetButton = document.querySelector(".button");
  resetButton.addEventListener("click", function () {
    for (let i = 0; i < inBoard.length; i++) {
      inBoard[i].innerHTML = "";
      inBoard[i].style.color = "white";
    }
    turn = 0;
    console.clear();
    resetChanges();
    winFlag = 0;
  });
}

function play() {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener("click", function () {
      if (inBoard[i].innerHTML == "") {
        if (turn % 2 == 0) {
          inBoard[i].innerHTML = "X";
        } else {
          inBoard[i].innerHTML = "O";
        }
        checkWin();
        turn++;
      } else console.log("Already placed there.");
    });
  }
}

function checkWin() {
  if (winFlag) return;
  var player = (turn % 2) + 1;
  for (let i = 0; i < board.length; i++) {
    if (inBoard[i].innerHTML != "") {
      if (i == 0 || i == 3 || i == 6) {
        if (
          inBoard[i].innerHTML == inBoard[i + 1].innerHTML &&
          inBoard[i].innerHTML == inBoard[i + 2].innerHTML
        ) {
          console.log("player " + player + " Win");
          winScript(i, i + 1, i + 2);
          return;
        }
      }
      if (i == 0 || i == 1 || i == 2) {
        if (
          inBoard[i].innerHTML == inBoard[i + 3].innerHTML &&
          inBoard[i].innerHTML == inBoard[i + 6].innerHTML
        ) {
          console.log("player " + player + " Win");
          winScript(i, i + 3, i + 6);
          return;
        }
      }
      if (i == 4) {
        if (
          inBoard[i - 4].innerHTML == inBoard[i + 4].innerHTML &&
          inBoard[i].innerHTML == inBoard[i - 4].innerHTML
        ) {
          console.log("player " + player + " Win");
          winScript(i, i + 4, i - 4);
          return;
        }
        if (
          inBoard[i - 2].innerHTML == inBoard[i + 2].innerHTML &&
          inBoard[i].innerHTML == inBoard[i - 2].innerHTML
        ) {
          console.log("player " + player + " Win");
          winScript(i, i + 2, i - 2);
          return;
        }
      }
    }
  }
}
play();
resetButton();


function f(x) {
    x*=2
    return function (y) {
        y*=x
        return function (z) {
            return z*y
        }
    }
}

let g = f(3)(4)(5)
console.log('g: ', g);