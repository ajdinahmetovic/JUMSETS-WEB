import { Component, OnInit } from '@angular/core';
import { ContentfulService, } from '../contentful.service'; // dodan service za cf
import { Entry } from 'contentful'; // dodano

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols: number;
  private novost: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 4;
    this.contentfulService.getProducts()
      .then(novost => this.novost = novost);
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;

  }



}
