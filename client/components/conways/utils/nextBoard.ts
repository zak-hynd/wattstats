import nextCellState from './nextCellState.ts'
import countAliveNeighbours from './countAliveNeighbours.ts'
import {Board} from './conwaysBoards.ts'
// import displayBoard from './displayBoard.js'; // needed?

function nextBoard(currentBoard: Board): Board {
    // const newboard = currentBoard //wow! holy fuck, THIS is the issue!
    const newboard: Board = currentBoard.map(row => [...row]) //THIS is how to solve it: a TRUE copy!
    currentBoard.forEach((row,r) => {
        row.forEach((cell,c) => {
            console.log()
           newboard[r][c] = nextCellState(cell,countAliveNeighbours(r,c,currentBoard))
           //nextCellState(cellState, #alive) | countAliveNeighbours(r, c, board)
        });
    });
    // console.log(newboard)
    return newboard
}

export default nextBoard


// const leTest = [
//     [false,false,false,false],
//     [false, true, true,false],
//     [ true,false, true,false],
//     [false,false, true,false]]
// console.log(countAliveNeighbours(3,1,leTest))
// const leTest2 = [
//     [false,false,false,false],
//     [false, true, true,false],
//     [false,false, true, true],
//     [false, true,false,false]]
// const leTest3 = [
//     [false,false,false,false],
//     [false, true, true, true],
//     [false,false,false, true],
//     [false,false, true,false]]
// const leTest4 = [
//             [false, true,false,false],
//             [false, true, true,false],
//             [ true,false, true,false],
//             [false,false,false,false]]
//     const leTest5 = [
//             [false,false,false,false],
//             [false, true,false,false],
//             [ true,false, true,false],
//             [false,false, true,false]]
//     const leTest6 = [
//             [false,false,false,false],
//             [false, true,false,false],
//             [false,false, true,false],
//             [false, true,false,false]]
//     const leTest7 = [
//             [false,false,false,false],
//             [false,false,false,false],
//             [false, true, true,false],
//             [false,false,false,false]]

// console.log(nextBoard(leTest6))
