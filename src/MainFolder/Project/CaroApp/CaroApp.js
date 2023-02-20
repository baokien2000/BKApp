import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from './calculateWinner';
import Button from 'react-bootstrap/Button';
let tableSize = 12;
export default function CaroApp() {
    const [history, setHistory] = useState([{
        squares: Array(tableSize * tableSize).fill(null),
    }])
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0)
    const [highlightMove, setHighlightMove] = useState(0)
    const [ASC, setASC] = useState(true)


    const handleClick = (i) => {
        const History = history.slice(0, stepNumber + 1);
        const current = History[History.length - 1];
        const squares = current.squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O'

        setHistory(History.concat([{ squares: squares, }]))
        setStepNumber(History.length)
        setXIsNext(!xIsNext)
        setHighlightMove(i)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    }
    const sortMove = () => {
        setASC(!ASC)
    }

    const move = () => {
        const moves = history.map((step, index) => {
            const desc = index ? 'Go to move #' + index : 'Go to the game start';
            return (
                <li key={index} >
                    <Button variant="secondary" onClick={() => jumpTo(index)} >
                        {desc}
                    </Button>
                </li>
            )

        })

        return <ol>{ASC == true ? moves : moves.reverse()}</ol>;
    }

    const status = () => {
        const current = history[stepNumber];
        const Winner = calculateWinner(current.squares);
        return (
            <p>
                {Winner
                    ? 'Winner is: ' + Winner[0]
                    : (current.squares.indexOf(null) <= -1
                        ? 'Draw'
                        : 'Next player: ' + (xIsNext ? "X" : "O")
                    )}
            </p>
        )

    }

    const sort = () => {
        return (
            <Button onClick={() => sortMove()} variant="light" >
                Sort
            </Button>
        )
    };
    return (
        <div className="CaroApp" >
            <div className="game-board">
                <p> Caro App</p>
                <Board
                    squares={history[stepNumber].squares}
                    onClick={i => handleClick(i)}
                    current={highlightMove}
                    Winner={calculateWinner(history[stepNumber].squares)}
                    tableSize={tableSize}
                />
            </div>
            <div className="game-info">
                {status()}
                {sort()}
                {move()}
            </div>
        </div>
    );
}
// class CaroApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(tableSize * tableSize).fill(null),
//             }],
//             xIsNext: true,
//             stepNumber: 0,
//             highlightMove: 0,
//             ASC: true
//         }
//     }
//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (squares[i] || calculateWinner(squares)) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? 'X' : 'O'
//         this.setState({
//             history: history.concat([{
//                 squares: squares,
//             }]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext,
//             highlightMove: i,
//         })
//     }

//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) === 0,
//         })
//     }

//     sortMove() {
//         this.setState({
//             ASC: !this.state.ASC,
//         })
//     }
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const Winner = calculateWinner(current.squares);

//         let move = history.map((step, index) => {
//             const desc = index ? 'Go to move #' + index : 'Go to the game start';
//             return (
//                 <li key={index} >
//                     <Button
//                         variant="secondary"
//                         onClick={() => this.jumpTo(index)}
//                     >
//                         {desc}
//                     </Button>
//                 </li>
//             )
//         })
//         move = this.state.ASC == true
//             ? move
//             : move.reverse();


//         let status
//         status = Winner
//             ? 'Winner is: ' + Winner[0]
//             : 'Next player: ' + (this.state.xIsNext ? "X" : "O");



//         const sort = () => {
//             return (
//                 <>
//                     <Button
//                         onClick={() => this.sortMove()}
//                         variant="light"
//                     >
//                         Sort
//                     </Button>
//                 </>
//             )
//         };

//         if (current.squares.indexOf(null) <= -1) {
//             status = 'Draw'
//         }

//         return (
//             <div className="CaroApp">
//                 <div className="game-board">
//                     <p> Caro App</p>
//                     <Board
//                         squares={current.squares}
//                         onClick={i => this.handleClick(i)}
//                         current={this.state.highlightMove}
//                         Winner={Winner}
//                         tableSize={tableSize}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <p>{status}</p>
//                     {sort()}
//                     <ol>{move}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// export default CaroApp;