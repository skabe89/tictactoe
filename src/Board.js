import React, {useState} from 'react';

export default function Board (){

    const [player, setPlayer] = useState("X")
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

    const changePlayer = () => {
        player === 'X' ? setPlayer('O') : setPlayer('X')
    }

    return(
        <div>
            <h1>Hello World</h1>
            <h1> {board.join(' || ')} </h1>
            <h1 onClick={changePlayer} > {player} </h1>

        </div>

    )

}