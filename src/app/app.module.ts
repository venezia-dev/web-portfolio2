import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoryComponent } from './components/history/history.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InfoComponent } from './components/info/info.component';
import { AppsComponent } from './components/apps/apps.component';
import { WebsComponent } from './components/dialogs/webs.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WelcomeComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    HistoryComponent,
    PortfolioComponent,
    FooterComponent,
    InfoComponent,
    AppsComponent,
    WebsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WebsComponent]
})
export class AppModule { }
