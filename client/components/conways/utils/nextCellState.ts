// import isOverPopulated from './isOverPopulated.js'
// import isUnderPopulated from './isUnderPopulated.js'
// import isRessurectable from './isRessurectable.js'
//^^not needed

function nextCellState(cellState: boolean, a:number): boolean { // a = number of alive neighbours
    //v if alive -> F unless 2or3  
return cellState ? (a === 2 || a === 3) : a === 3
        //^ if dead -> F unless 3
}

export default nextCellState


// const testa = [0,1,2,3,4,5,6,7,8]
// console.log(testa.map(i => nextCellState(true,i)))  // f,f,t,t,f,f,f,f,f
// console.log(testa.map(i => nextCellState(false,i))) // f,f,f,t,f,f,f,f,f