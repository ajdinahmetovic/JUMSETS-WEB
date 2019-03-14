import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule, MatTabsModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import {MDBBootstrapModule, MdbCardComponent} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

import { ContentfulService } from './contentful.service'; // dodan service za cf
import { Routes, RouterModule } from '@angular/router'; // dodano
import { NovostListComponent } from './novost-list/novost-list.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component'; // dodano



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    NovostListComponent,
    FooterComponent,
    AboutComponent,
    StaffComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
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
