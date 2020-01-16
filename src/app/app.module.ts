//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
//Components
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InfoComponent } from './components/info/info.component';
import { AppsComponent } from './components/apps/apps.component';
import { WebsComponent } from './components/dialogs/webs.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioComponent,
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
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WebsComponent]
})
export class AppModule { }
