import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veneziadev3';

  constructor(private router: Router) {}

  ngOnInit() {

  }

  isIndexRoute() {
    return this.router.url === '/';
  }
}
