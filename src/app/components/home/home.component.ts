import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Manualmente hasta que instagram, libere un Widget!
  instagram = [
    {"img": "https://www.instagram.com/p/B7Z4v48Fr-5"},
    {"img": "https://www.instagram.com/p/B7Z4miMF9A0"},
    {"img": "https://www.instagram.com/p/B7Z4j-2FRbF"},
    {"img": "https://www.instagram.com/p/B7Z4gHbljMs"},
    {"img": "https://www.instagram.com/p/B7Z4bqnlP6S"},
    {"img": "https://www.instagram.com/p/B7ZX1JiFv4Y"}
  ]

  constructor(
  ) { }

  ngOnInit() {
  }
  


}
