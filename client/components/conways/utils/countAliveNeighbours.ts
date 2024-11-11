import {Board} from './conwaysBoards.ts'

// import getNeighbours from './getNeighbours'
//funny... I think I naively rolled isOutOfBounds and getIsOutOfBounds into this function

    
function countAliveNeighbours(r:number, c:number, board:Board): number {
    const neighbours = [[r-1, c-1], [r-1, c], [r-1, c+1],
                        [r  , c-1],           [r  , c+1],
                        [r+1, c-1], [r+1, c], [r+1, c+1]]

    let countAlive = 0
    neighbours.forEach(([ro, co]) => { //[row, column] = element
        //don't try to count neighbours outside the board
        if (ro >= 0 && ro < board.length && co >= 0 && co < board[0].length) {
            if (board[ro][co]) countAlive += 1 //count when true
        }})
    return countAlive
}


export default countAliveNeighbours


// const leTest = [
//     [false,false,false,false],
//     [false, true, true,false],
//     [ true,false, true,false],
//     [false,false, true,false]]
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

// const testy = leTest
// console.log(testy.map((row,r) => row.map((cell, c) => countAliveNeighbours(r,c,testy))))
