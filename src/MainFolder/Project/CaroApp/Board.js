import React from "react";
import Square from './Square'

export default function Board(props) {
    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
                current={props.current}
                key={i}
                index={i}
                Winner={props.Winner}
            />
        )
    }

    const board = () => {
        const val = [];
        for (let i = 1; i <= props.tableSize; i++) {
            val.push(<div className="board-row" key={i}>{boardRow(i)}</div>);
        }
        return val;
    }

    const boardRow = (index) => {
        const val = [];
        for (let i = index * props.tableSize - props.tableSize; i < index * props.tableSize; i++) {
            val.push(renderSquare(i));
        }
        return val;
    }

    return (
        <>{board()}</>
    );

}
// class Board extends React.Component {
//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.props.squares[i]}
//                 // value={i}
//                 onClick={() => this.props.onClick(i)}
//                 current={this.props.current}
//                 key={i}
//                 index={i}
//                 Winner={this.props.Winner}
//             />
//         )
//     }

//     board() {
//         const val = [];
//         for (let i = 1; i <= this.props.tableSize; i++) {
//             val.push(<div className="board-row" key={i}>{this.boardRow(i)}</div>);
//         }
//         return val;
//     }

//     boardRow(index) {
//         const val = [];
//         for (let i = index * this.props.tableSize - this.props.tableSize; i < index * this.props.tableSize; i++) {
//             val.push(this.renderSquare(i));
//         }
//         return val;
//     }

//     render() {
//         return (
//             <>{this.board()}</>
//         );
//     }
// }

// export default Board;