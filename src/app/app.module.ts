import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/accueil/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllComponent } from './components/request/display-all/display-all.component';
import { DisplayOneComponent } from './components/request/display-one/display-one.component';
import { Page404Component } from './components/page404/page404.component';
import { NewComponent } from './components/request/new/new.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    LoginComponent,
    DisplayAllComponent,
    DisplayOneComponent,
    Page404Component,
    NewComponent,
    LogoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
