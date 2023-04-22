import { Component, Input } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(){ }


  @Input() flights: Flight[] = [];
  @Input() type: string = "";
}

