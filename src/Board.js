import React from "react";
import Square from "./Square";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  // stateを更新する関数
  // 直接データを書き換えるのではなく、コピーを作成し、新しいデータで古いデータを上書きしている
  handleClick(i) {
    const squares = this.state.squares.slice();

    squares[i] = this.state.xIsNext ? "✖" : "〇";
    this.setState({ squares: squares }, { xIsNext: !this.state.xIsNext });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
