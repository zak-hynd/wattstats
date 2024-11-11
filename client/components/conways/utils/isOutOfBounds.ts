import {Board} from './conwaysBoards.ts'

function isOutOfBounds(index:number, board: Board):boolean {
    // console.log(index)
    // console.log(board) 
    return index < 0 || index > board.length-1
}

export default isOutOfBounds
