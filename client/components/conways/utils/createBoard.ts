import {Board} from './conwaysBoards.ts'

function createBoard(size: number, spacing: number): Board {
    //create array, n times create an array of False
    const board: Board = []
    for (let i = 0; i < size; i++) {
        const row = new Array(size).fill(false);
        board.push(row);
    }

    //fill board with random booleans
    board.forEach(row => {
        row.forEach((cell, index) => {
            row[index] = randBool(spacing);
          });
    });

    return board
}
export default createBoard


function randBool(spacing:number): boolean {
    return (Math.floor(Math.random() * spacing) ===0)
}

// console.log(createBoard(10))