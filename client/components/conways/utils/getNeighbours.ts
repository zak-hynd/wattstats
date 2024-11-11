import {Board} from './conwaysBoards.ts'

// import indicesAreOutOfBounds from './indicesAreOutOfBounds.ts'
import isOutOfBounds from './isOutOfBounds.ts'

function getNeighbours(x:number, y:number, board: Board): number {
    // console.log(x)
    // console.log(y)
    // console.log(board)
    // (x cellRow, y cellColumn, board)
    const neighbours = [[x-1, y-1], [x-1, y], [x-1, y+1],
                        [x  , y-1],           [x  , y+1],
                        [x+1, y-1], [x+1, y], [x+1, y+1]]

    let count = 0
    // neighbours.forEach(([r, c]) => { //[row, column] = element
    //     //don't try to count neighbours outside the board
    //     if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
    //         count += 1
    //     }})
    

    neighbours.forEach(arr => {
        arr.forEach(index => {
            if (isOutOfBounds(index,board)){
//^^sending the board every time seems illogical, surely we just want to send the board's size (Width or Height)...
                count +=1 
            }}) 
    })
    //^^gah I can't be bothered with this damned thing!
    //I'm pretty sure I have already solved this in the countAliveNeighbours function

    return count

}

export default getNeighbours
