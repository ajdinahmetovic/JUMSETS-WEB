import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

import { ContentfulService } from './contentful.service'; //dodan service za cf
import { Routes, RouterModule } from '@angular/router'; //dodano
import { NovostListComponent } from './novost-list/novost-list.component'; //dodano

const routes: Routes = [ //dodano
  { path: '', redirectTo: '/novost', pathMatch: 'full' },
  { path: 'novost', component: NovostListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    NovostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes) //dodano
  ],
  exports: [],
  providers: [
    ContentfulService, //dodano
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
