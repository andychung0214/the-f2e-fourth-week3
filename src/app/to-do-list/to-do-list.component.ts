import { listPokerCard } from './../models/listPokerCard.model';
import { Component, OnInit } from '@angular/core';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  list: listPokerCard[] = [
    {
      pokerNum : 'A',
      pokerText: '會員系統\n(登入、註冊、權限管理)',
      children: []
    },
    {
      pokerNum : 'A',
      pokerText: '應徵者的線上履歷編輯器',
      children: []
    },
    {
      pokerNum : 'A',
      pokerText: '前台職缺列表(職缺詳細內容、點選可發送應徵意願)',
      children: []
    },
    {
      pokerNum : 'A',
      pokerText: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
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

  constructor() { }

  ngOnInit(): void {
  }

}
