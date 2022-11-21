import { DialogComponent } from './dialog.component';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }
  public openDialog(desc?: any): void {
    this.dialog.open(DialogComponent, {
      data: {
        title: '審核結果說明',
        note: desc,
        isDisplayOnly: true,
        inputDesc: '',
        content: desc
      },
      width:'800px'
      // minWidth: "8vw",
      // maxWidth: "16vw",
      // width: "8rem"

    })
  };
}
