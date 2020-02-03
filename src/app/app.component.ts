import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bounceInLeft, bounceInRight, flipInX} from 'ng-animate';
import { trigger,transition,useAnimation } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('bounce', [transition('* => *', useAnimation(bounceInLeft, {params: { timing: 3 }}))]),
      trigger('bounce1', [transition('* => *', useAnimation(bounceInLeft, {params: { timing: 5 }}))]),
      trigger('bounce2', [transition('* => *', useAnimation(bounceInRight , {params: { timing: 5}}))]),
  ]
})
export class AppComponent {
  title = 'veneziadev3';

  public bounce: any;
  public state1: boolean =  true;


  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.state1 = false
      }, 4000);
  }

  isIndexRoute() {
    return this.router.url === '/';
  }


}
