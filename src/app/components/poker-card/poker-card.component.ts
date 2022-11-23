import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poker-card',
  templateUrl: './poker-card.component.html',
  styleUrls: ['./poker-card.component.scss']
})
export class PokerCardComponent implements OnInit {
  @Input() pokerText?:string;
  @Input() pokerNum?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
