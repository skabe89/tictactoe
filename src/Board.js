import React, {useState} from 'react';

export default function Board (){

    const [player, setPlayer] = useState("X")
    const [board, setBoard] = useState(['.', '.', '.', '.', '.', '.', '.', '.', '.'])

    const changePlayer = () => {
        player === 'X' ? setPlayer('O') : setPlayer('X')
    }

    const placeCharacter = (index) => {
        if(board[index] === "."){
            let newBoard = [...board]
            newBoard[index] = player
            setBoard(newBoard)
            changePlayer()
        }
        else {
            alert("not a valid move")
        }
    }

    return(
        <div>
            <h1>Hello World</h1>
            {/* <h1> {board.join(' || ')} </h1> */}
            <h1 onClick={changePlayer} > {player} </h1>

            <h1 onClick={() => placeCharacter(0)}>{board[0]}</h1>
            <h1 onClick={() => placeCharacter(1)}>{board[1]}</h1>
            <h1 onClick={() => placeCharacter(2)}>{board[2]}</h1>
            <h1 onClick={() => placeCharacter(3)}>{board[3]}</h1>
            <h1 onClick={() => placeCharacter(4)}>{board[4]}</h1>
            <h1 onClick={() => placeCharacter(5)}>{board[5]}</h1>
            <h1 onClick={() => placeCharacter(6)}>{board[6]}</h1>
            <h1 onClick={() => placeCharacter(7)}>{board[7]}</h1>
            <h1 onClick={() => placeCharacter(8)}>{board[8]}</h1>

        </div>

    )

}