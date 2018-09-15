// Grab the table DOM element
var table = document.getElementById("boardTable");

// Set the row numbers, column numbers
var NUMROWS = 15;
var NUMCOLS = 15;

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
