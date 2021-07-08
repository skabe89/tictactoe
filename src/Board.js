import React, {useState} from 'react';

export default function Board (){

    const [player, setPlayer] = useState("X")
    const [board, setBoard] = useState(['.', '.', '.', '.', '.', '.', '.', '.', '.'])

    const changePlayer = () => {
        player === 'X' ? setPlayer('O') : setPlayer('X')
    }

    return(
        <div>
            <h1>Hello World</h1>
            {/* <h1> {board.join(' || ')} </h1> */}
            <h1 onClick={changePlayer} > {player} </h1>

            <h1>{board[0]}</h1>
            <h1>{board[1]}</h1>
            <h1>{board[2]}</h1>
            <h1>{board[3]}</h1>
            <h1>{board[4]}</h1>
            <h1>{board[5]}</h1>
            <h1>{board[6]}</h1>
            <h1>{board[7]}</h1>
            <h1>{board[8]}</h1>

        </div>

    )

}