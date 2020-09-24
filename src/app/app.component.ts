import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular TicTacToe";
  board: any[];
  currentTurn: string = "X";
  winner: string = "";
  fill: number = 0;
  notification: string = "X goes first";
  winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  calculateWinner() {
    for (let line of this.winConditions) {
      if (
        this.board[line[0]] &&
        this.board[line[0]] == this.board[line[1]] &&
        this.board[line[0]] == this.board[line[2]]
      ) {
        this.winner = this.board[line[0]];
      }
    }

    if (this.fill == 9 && !this.winner) {
      this.winner = "Draw";
    }
  }

  switchTurn() {
    this.currentTurn === "X"
      ? (this.currentTurn = "O")
      : (this.currentTurn = "X");
  }

  changeNotification() {
    if (!this.winner) {
      if (this.fill % 2 == 0) {
        this.notification = "X's turn";
      } else {
        this.notification = "O's turn";
      }
    } else {
      if (this.winner == "Draw") {
        this.notification = "Draw.";
      } else {
        this.notification = this.winner + " wins.";
      }
    }
  }
  
  nextTurn(board: any[]) {
    this.board = board;
    this.fill++;
    this.calculateWinner();
    this.switchTurn();
    if (this.winner) {
      this.currentTurn = "";
    }
    this.changeNotification();
  }


  resetBoard() {
    this.winner = "";
    this.fill = 0;
    this.currentTurn = "X";
    this.notification = "X goes first.";
  }
}
