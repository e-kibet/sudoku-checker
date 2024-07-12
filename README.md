## Sudoku Checker
This application checks if a completed Sudoku puzzle adheres to the Sudoku rules:

- Each row must contain all numbers from 1 to 9 with no repeats.
- Each column must contain all numbers from 1 to 9 with no repeats.
- Each of the nine 3x3 sub-grids (boxes) must contain all numbers from 1 to 9 with no repeats.


### Features
- Validates a completed Sudoku board to ensure it meets Sudoku rules.
- Written in JavaScript, uses Jest for unit testing.


### Installation
1.**Clone the repository:**

```bash
git clone <repository-url>
cd sudoku-checker
```
2. **Install dependencies:**

```bash
npm install
```

## Usage

- Run tests:

```bash
npm test
```
- Integrate with your application:

Use the isValidSudoku function from src/sudokuChecker.js in your JavaScript application to validate Sudoku boards.

### Example

```bash
const isValidSudoku = require('./src/sudokuChecker');

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true
```

### Contributing
Contributions are welcome! Fork the repository and submit a pull request.