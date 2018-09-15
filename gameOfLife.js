// Grab the table DOM element
var table = document.getElementById("boardTable");

// Set the row numbers, column numbers
var NUMROWS = 15;
var NUMCOLS = 15;

// the 2d array that will be used to hold the states of every cell
// and determine it's next generation
// must initialize with all 0s
var cells = [];
var i=0;
var j=0;
for (i ;i<NUMROWS; i++) {
    cells[i] = [];
    for (j=0; j<NUMCOLS; j++) {
        cells[i][j] = 0;
    }
}

// build the board
function bodyOnLoad() {
    for (var i = 0; i < NUMROWS; i++) {
        var newRow = table.insertRow();

        for (var j = 0; j < NUMCOLS; j++) {
            var newCell = newRow.insertCell();
            newCell.onclick = function() {toggleAliveClass(this);};
        }
    }
}

// toggles the "alive" class of the cell which controls its color
function toggleAliveClass(cell) {
    var classes = cell.className;
    if ( classes.match(/(?:^|\s)alive(?!\S)/) ){
        cell.className = classes.replace( /(?:^|\s)alive(?!\S)/g , '' );
    } else {
        cell.className += "alive";
    }
}

// pull the current state of the board to a 2d array of ints
// with 0 representing dead and 1 representing alive
function pullTo2dArray() {
    // get all cells with class "alive"
    var aliveCells = table.querySelectorAll('td[class^="alive"]');

    // set those cells to 1 in the 2d array
    for (var i = 0; i < aliveCells.length; i++) {
        var y = aliveCells[i].parentNode.rowIndex;
        var x = aliveCells[i].cellIndex;
        cells[y][x] = 1;
    }
}
