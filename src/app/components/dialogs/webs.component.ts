import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-webs',
  templateUrl: './webs.component.html',
  styleUrls: ['./webs.component.css']
})
export class WebsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WebsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
  }

}
