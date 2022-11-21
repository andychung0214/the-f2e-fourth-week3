import { DialogService } from './../components/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  desc?: string;

  constructor(private dialogservice: DialogService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let secondMessage = document.getElementById('secondMessage');
    if (secondMessage !== null && secondMessage !== undefined) {

      secondMessage.style.display = 'none';
    }
  }

  openDialog(des: string) {
    this.dialogservice.openDialog(this.desc);
  }
}
