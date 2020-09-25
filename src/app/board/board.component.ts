import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() currentTurn: string;
  @Input() winLine: number[];
  @Output() changedBoard = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();

  board:any[];

  constructor() { }

  ngOnInit() {
    this.board = Array(9).fill(null);
  }

  selectCell(cell:number) {
    if(!this.board[cell]) {
      this.board[cell] = this.currentTurn;
      this.changedBoard.emit(this.board);
    }
  }

  resetBoard() {
    this.board = Array(9).fill(null);
    this.reset.emit();
  }
}