import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule, MatTabsModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import {MDBBootstrapModule, MdbCardComponent} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

import { ContentfulService } from './contentful.service'; // dodan service za cf
import { Routes, RouterModule } from '@angular/router'; // dodano
import { NovostListComponent } from './novost-list/novost-list.component';
import { AboutComponent } from './about/about.component';
import { AboutContent1Component } from './about-content1/about-content1.component';
import { AboutContent2Component } from './about-content2/about-content2.component';
import { AboutContent3Component } from './about-content3/about-content3.component';
import { AboutContent4Component } from './about-content4/about-content4.component'; // dodano



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    NovostListComponent,
    AboutComponent,
    AboutContent1Component,
    AboutContent2Component,
    AboutContent3Component,
    AboutContent4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),

  ],
  exports: [],
  providers: [
    ContentfulService, // dodano
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
