import { Component, OnInit, Input } from '@angular/core';
import {Options} from 'sortablejs';
import { listPokerCard } from 'src/app/models/listPokerCard.model';

@Component({
  selector: 'app-list-poker-card',
  templateUrl: './list-poker-card.component.html',
  styleUrls: ['./list-poker-card.component.scss']
})
export class ListPokerCardComponent implements OnInit {
  @Input() pokerText?:string;
  @Input() pokerNum?:string;
  @Input() listPokerCard?: listPokerCard;

  options: Options = {
    group: {
      name: 'task',
      put: true
    },
    revertOnSpill: true,
    multiDrag: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
