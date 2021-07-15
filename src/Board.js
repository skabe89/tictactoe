import React, {useState} from 'react';

export default function Board (){

    const [player, setPlayer] = useState("X")
    const [board, setBoard] = useState(['.', '.', '.', '.', '.', '.', '.', '.', '.'])

    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ]

    const changePlayer = () => {
        player === 'X' ? setPlayer('O') : setPlayer('X')
    }

    const placeCharacter = (index) => {
        if(board[index] === "."){
            let newBoard = [...board]
            newBoard[index] = player
            setBoard(newBoard)
            checkWin()
            changePlayer()
        }
        else {
            alert("not a valid move")
        }
    }

    const checkWin = () => {
        let won = false
        wins.forEach(combo => {
            if(board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player){
                console.log(board[combo[0]])
                won = true
            }
        })
        return won
    }

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            {/* <h1> {board.join(' || ')} </h1> */}
            <h1 onClick={changePlayer} > {player}'s Turn </h1>

            <div className="Board-square">
                <h1 className="Board-cell" onClick={() => placeCharacter(0)}>{board[0]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(1)}>{board[1]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(2)}>{board[2]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(3)}>{board[3]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(4)}>{board[4]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(5)}>{board[5]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(6)}>{board[6]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(7)}>{board[7]}</h1>
                <h1 className="Board-cell" onClick={() => placeCharacter(8)}>{board[8]}</h1>
            </div>

        </div>

    )

}