import { Component, OnInit } from '@angular/core';
import { bounceInLeft, bounceInRight} from 'ng-animate';
import { trigger,transition,useAnimation, style, state, animate } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('ani1', [
      state('inactive', style({
        backgroundColor: '#fff9f0',
        opacity: 0
      })),
      state('active', style({
        backgroundColor: '#401c3e',
        opacity: 1
      })),
      transition('inactive => active', animate('7s'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public state: string = "inactive";


  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.state = "active"
      }, 2000);
  }

}
