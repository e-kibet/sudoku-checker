// src/sudokuChecker.js

function isValidSudoku(board) {
    // Implement Sudoku validation logic here
    if (!isValidRows(board) || !isValidColumns(board) || !isValidBoxes(board)) {
        return false;
    }
    return true;
}

function isValidRows(board) {
    // Check each row for validity (no duplicate numbers)
    for (let row = 0; row < 9; row++) {
        if (!isValidSet(board[row])) {
            return false;
        }
    }
    return true;
}

function isValidColumns(board) {
    // Check each column for validity (no duplicate numbers)
    for (let col = 0; col < 9; col++) {
        let column = [];
        for (let row = 0; row < 9; row++) {
            column.push(board[row][col]);
        }
        if (!isValidSet(column)) {
            return false;
        }
    }
    return true;
}

function isValidBoxes(board) {
    // Check each 3x3 box for validity (no duplicate numbers)
    for (let startRow = 0; startRow < 9; startRow += 3) {
        for (let startCol = 0; startCol < 9; startCol += 3) {
            let box = [];
            for (let row = startRow; row < startRow + 3; row++) {
                for (let col = startCol; col < startCol + 3; col++) {
                    box.push(board[row][col]);
                }
            }
            if (!isValidSet(box)) {
                return false;
            }
        }
    }
    return true;
}

function isValidSet(nums) {
    // Helper function to check if an array of numbers is a valid set (1-9 with no duplicates)
    let seen = new Set();
    for (let num of nums) {
        if (num !== '.' && seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}

module.exports = isValidSudoku;
