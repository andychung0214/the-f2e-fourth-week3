import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';
import { listPokerCard } from './../models/listPokerCard.model';
import { Options } from 'sortablejs';


// import {
//   DroppableDirective,
//   ValidateDrop,
// } from 'the-f2e-fourth-week3/src/lib/droppable.directive';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.scss']
})
export class ArrangeComponent implements OnInit {

  list: listPokerCard[] = [
    {
      pokerNum : '8',
      pokerText: '會員系統\n(登入、註冊、權限管理)',
      children: []
    },
    {
      pokerNum : '8',
      pokerText: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
      children: []
    },
    {
      pokerNum : '13',
      pokerText: '應徵者的線上履歷編輯器',
      children: []
    },
    {
      pokerNum : '5',
      pokerText: '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
      children: []
    }
  ]

  options: Options = {
    group: {
      name: "task",
      put: true
    },
    revertOnSpill: true,
    multiDrag: true
  };

  droppedData?: string;
  event?: Event

  dragEnd(event: Event) {
    console.log('Element was dragged', event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
