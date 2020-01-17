import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebsComponent } from '../dialogs/webs.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  webs = [
  {"title":"WhatDay", "url":"www.whatday.is","year":"2019","img":"whatdayp.png","imgGrande": "webimg/whatday.png", "code1": "nodejsx30.png", "code2": "mysqlx30.png"},
  {"title":"VivaLugano", "url":"www.vivalugano.com.ar","year":"2019","img":"vivaluganop.jpg","imgGrande": "webimg/vivalugano.jpg", "code1": "htmlx30.png", "code2": "bootstrapx30.png"},
  {"title":"VeneziaDev1", "url":"veneziadev2.herokuapp.com","year":"2019","img":"veneziadev1p.png","imgGrande": "webimg/veneziadev1.png", "code1": "angularx30.png", "code2": "nodejsx30.png"},
  {"title":"Noveraz", "url":"www.noveraz.com","year":"2018","img":"noverazp.png","imgGrande": "webimg/noveraz.jpg", "code1": "htmlx30.png", "code2": "bootstrapx30.png"},
  {"title":"Prisma Constructora SRL", "url":"www.prismaconstructorasrl.com","year":"2018","img":"prismap.png","imgGrande": "webimg/prisma.jpg", "code1": "htmlx30.png", "code2": "bootstrapx30.png"},
  {"title":"InsumosIT", "url":"www.insumosit.com.ar","year":"2017","img":"insumositp.jpg","imgGrande": "webimg/insumosit.jpg", "code1": "htmlx30.png", "code2": "bootstrapx30.png"}
]
  webR: any;

  constructor(public dialog: MatDialog,
    private router: Router,
    private route:ActivatedRoute) { }

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
