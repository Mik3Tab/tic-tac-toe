import { Component, OnInit } from '@angular/core';
import { lines } from '../../constants/constants';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  makeMoveHandler(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if( this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) { 
        return this.squares[a];
      }
    }

    return '';
  }
}
