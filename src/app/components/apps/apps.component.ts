import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebsComponent } from '../dialogs/webs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['../portfolio/portfolio.component.css']
})
export class AppsComponent implements OnInit {

  apps = [
    { "title": "CRUD Listado De Clientes", "url": "listado-clientes-crud-angular.herokuapp.com", "year": "2020", "img": "listadoclientep.png", "imgGrande": "appimg/listadocliente.png", "code1": "angularx30.png", "code2": "nodejsx30.png"},
    { "title": "Calcular Presupuesto", "url": "calcular-presupuesto.herokuapp.com", "year": "2019", "img": "carlcularpresupuestop.png", "imgGrande": "appimg/carlcularpresupuesto.png", "code1": "angularx30.png", "code2": "nodejsx30.png" }
  ]

  appR: any;


  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.appRandom()
  }

  appRandom(){
    if (this.apps != null){
      let i = Math.floor(Math.random() * (this.apps.length - 0));
      this.appR = this.apps[i];
      return this.appR;
    } else {
      console.log("No hay apps para mostrar!");
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
