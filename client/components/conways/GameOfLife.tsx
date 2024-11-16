import React, { useEffect, useState } from 'react'
import createBoard from '../conways/utils/createBoard'
import nextBoard from '../conways/utils/nextBoard'
import { Board, life, gosper } from '../conways/utils/conwaysBoards'
import {Link} from 'react-router-dom'

const refreshInterval = 100; // milliseconds
const size = 40;
const spacing = 3;

const GameOfLife: React.FC = () => {
  const [board, setBoard] = useState<Board>(life); //start with the 'life' board
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  //function to update the board based on the selected type
  const updateBoard = (selectedBoard: string) => {
    switch (selectedBoard) {
      case '1':
        setBoard(life);
        break;
      case '2':
        setBoard(gosper);
        break;
      case '3':
        setBoard(createBoard(size, spacing));
        break;
      default:
        console.log('Curious error. Have a KitKat')
    }
  }

  //function to start the game loop
  const startGame = () => {
    if (intervalId) return //prevent multiple intervals
    const id = setInterval(() => {
      setBoard((prevBoard) => nextBoard(prevBoard))
    }, refreshInterval)
    setIntervalId(id)
    setIsRunning(true)
  }

  //function to stop the game loop
  const stopGame = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    setIsRunning(false)
  }

  const toggleGame = () => {
    if (isRunning) {
        stopGame();
    } else {
        startGame();
    }
    }

  useEffect(() => {
    return () => {
      stopGame() //clean up on unmount
    }
  }, [])

return (
  <>
    <Link to="/">home</Link>
    <div className="bg-[#331E36] text-[#F9E7E7] p-4 flex">
        <div className="flex flex-col items-start mr-4">
            <h1 className="text-2xl font-bold text-start mb-4">
                <s>Conway&apos;s</s> Zak&apos;s<br/> Game of Life
            </h1>
            <div id="controls" className="flex flex-col items-start mx-6 gap-2">
                <button 
                onClick={toggleGame} 
                className="bg-[#F9E7E7] text-[#A33B20] p-2 rounded hover:bg-[#A33B20] hover:text-[#F9E7E7]"
                >
                ⏯
                </button>
                <button 
                onClick={() => updateBoard('1')} 
                className="bg-[#F9E7E7] text-[#A33B20] p-2 rounded hover:bg-[#A33B20] hover:text-[#F9E7E7]"
                >
                Life
                </button>
                <button 
                onClick={() => updateBoard('2')} 
                className="bg-[#F9E7E7] text-[#A33B20] p-2 rounded hover:bg-[#A33B20] hover:text-[#F9E7E7]"
                >
                Gosper&apos;s
                </button>
                <button 
                onClick={() => updateBoard('3')} 
                className="bg-[#F9E7E7] text-[#A33B20] p-2 rounded hover:bg-[#A33B20] hover:text-[#F9E7E7]"
                >
                Random Seed
                </button>
            </div>
          </div>
          <div id="board" className="flex flex-col mt-4" onClick={toggleGame} aria-hidden="true" >
              {board.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                  {row.map((cell, colIndex) => (
                  <div
                      key={colIndex}
                      className={`w-3 h-3 m-0.5 rounded ${cell ? 'bg-[#B07BAC]' : 'bg-transparent'}`}
                  />
                  ))}
              </div>
            ))}
          </div>
      </div>
    </>
  )
}
export default GameOfLife