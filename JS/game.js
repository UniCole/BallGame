'use strict';

var numColor = { 1: 'blue', 2: 'green', 3: 'red', 4: 'purple' }
//The model
var gBoard;
var MINES = '💣';
var gStartPos = { i: 0, j: 0 };

//This is an object by which the board size is set 
//in this case: 4x4 board and how many mines to put)
var gLevel = {
    SIZE: 4,
    MINES: 2
};

//This is an object in which you can keep and update the 
//current game state:
var gGame = {
    isOn: false,     //1)isOn: Boolean, when true we let the user play.
    shownCount: 0,   //2)shownCount: How many cells are shown.
    markedCount: 0,  //3)markedCount: How many cells are marked (with a flag).
    secsPassed: 0    //4)secsPassed: How many seconds passed .
}

//This is called when page loads
function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    setMinesNegsCount(gBoard)
}

//Builds the board Set mines at random locations
//call setMinesNegsCount() Return the created board
function buildBoard() {
    var board = createMat(4, 4);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = {
                // id: {i: i, j: j},
                minesAroundCount: 4,
                isShown: true,
                isMine: false,
                isMarked: true
            }
            board[i][j] = cell
        }
    }
    board[1][2] = MINES
    board[3][1] = MINES

    // console.log(board)
    return board;
}
console.table(buildBoard(gBoard))

//Count mines around each cell and set the cell's 
//minesAroundCount.
function setMinesNegsCount(board) {
    var minesAroundCount = 0
    for (var i = board[i] - 1; i <= board[i] + 1; i++) {
        if (i < 0 || i >= board.length - 1) continue;
        for (var j = board[j] - 1; j <= board[j] + 1; j++) {
            if (j < 0 || j >= board[0].length - 1) continue;
            if (board[i] === i && board[j] === j) continue;
            var cell = board[i][j]
            // console.log('cell', cell)
            if (cell === MINES) {
                minesAroundCount++
            }
        }
    }
    return minesAroundCount
}
// console.log(setMinesNegsCount(gBoard, gStartPos.i, gStartPos.j))

//Render the board as a <table> to the page
function renderBoard() {
    var strHTML = ``
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < gBoard.length; j++) {
            var currCell = gBoard[i][j]
             // strHTML += `\t<td onclick="setMinesNegsCount(${currCell}, this)>${currCell.minesAroundCount}</td>\n`
            strHTML += `\t<td> ${currCell} </td>\n`
        }
        strHTML += `</tr>\n`
    }
    var elTable = document.querySelector('.tbody')
    elTable.innerHTML = strHTML
}

//Called when a cell (td) is clicked
function cellClicked(elCell, i, j) {

}

//Called on right click to mark a cell (suspected to be
//a mine) Search the web (and implement) how to hide the 
//context menu on right click
function cellMarked(elCell) {

}

//Game ends when all mines are marked, and all the other 
//cells are shown
function checkGameOver() {

}

//When user clicks a cell with no mines around, we need to
//open not only that cell, but also its neighbors.
function expandShown(board, elCell, i, j) {

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

