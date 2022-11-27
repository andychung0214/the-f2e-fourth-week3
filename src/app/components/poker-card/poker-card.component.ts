import { Component, OnInit, Input } from '@angular/core';
import { Options } from 'sortablejs';
import { listPokerCard } from 'src/app/models/listPokerCard.model';

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
