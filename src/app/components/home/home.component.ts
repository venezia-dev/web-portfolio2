import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Manualmente hasta que instagram, libere un Widget!
  instagram = [
    {"img": "https://www.instagram.com/p/B270MlKhvXC"},
    {"img": "https://www.instagram.com/p/B2dBXZShXM4"},
    {"img": "https://www.instagram.com/p/B1ztlMEBpjq"},
    {"img": "https://www.instagram.com/p/Bw0a6SWhtGs"},
    {"img": "https://www.instagram.com/p/BtuKmNWBbnD"},
    {"img": "https://www.instagram.com/p/BqbJGqXhU23"}
  ]

  constructor(
  ) { }

  ngOnInit() {
  }
  


}
