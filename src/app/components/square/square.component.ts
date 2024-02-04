import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [BoardComponent, CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value: "X" | "O";
}
