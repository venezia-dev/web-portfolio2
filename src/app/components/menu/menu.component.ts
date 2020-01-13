import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  img = [
    'gradu.png',
    'gears1.png',
    'phone.png'
  ];

  constructor() { }

  ngOnInit() {
  }

  dragEnd($event: CdkDragEnd) {
    console.log($event.source.getFreeDragPosition());
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("volvi a su lugar")
    } else {
      console.log("llego al medio")

    }
  }

}
