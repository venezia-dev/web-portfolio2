import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebsComponent } from '../dialogs/webs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  webs = [
  {"title":"PacmanWeb", "url":"Proximamente","year":"2020","img":"pac.png","imgGrande": "webimg/pac.png"},
  {"title":"VivaLugano", "url":"www.vivalugano.com.ar","year":"2019","img":"vivaluganop.jpg","imgGrande": "webimg/vivalugano.jpg"},
  {"title":"WhatDay", "url":"www.whatday.com","year":"2019","img":"whatdayp.png","imgGrande": "webimg/whatday.png"},
  {"title":"Noveraz", "url":"www.noveraz.com","year":"2018","img":"noverazp.png","imgGrande": "webimg/noveraz.jpg"},
  {"title":"Prisma Constructora SRL", "url":"www.prismaconstructorasrl.com","year":"2018","img":"prismap.png","imgGrande": "webimg/prisma.jpg"},
  {"title":"InsumosIT", "url":"www.insumosit.com.ar","year":"2017","img":"insumositp.jpg","imgGrande": "webimg/insumosit.jpg"}
]
  webR: any;

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.webRandom()
  }

  webRandom(){
    if (this.webs != null){
      let i = Math.floor(Math.random() * (this.webs.length - 0));
      this.webR = this.webs[i];
      return this.webR;
    } else {
      console.log("No hay webs para mostrar!");
    }
  }

  openDialog(web) {
    this.dialog.open(WebsComponent, {
      data: {web}
    });
  }

  isIndexRoute() {
    return this.router.url === '/';
  }

}
