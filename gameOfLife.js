// Grab the table DOM element
var table = document.getElementById("boardTable");

// Set the row numbers, column numbers
var NUMROWS = 15;
var NUMCOLS = 15;

function bodyOnLoad() {
    for (var i = 0; i < NUMROWS; i++) {
        var newRow = table.insertRow();

        for (var j = 0; j < NUMCOLS; j++) {
            newRow.insertCell();
        }
    }
}

