import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppsComponent } from './components/apps/apps.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'apps', component: AppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
