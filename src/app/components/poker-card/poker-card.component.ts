import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poker-card',
  templateUrl: './poker-card.component.html',
  styleUrls: ['./poker-card.component.scss']
})
export class PokerCardComponent implements OnInit {
  @Input() pokerText?:string;

  constructor() { }

  ngOnInit(): void {
    this.pokerText = '會員系統\n(登入、註冊、權限管理)';
  }

}
