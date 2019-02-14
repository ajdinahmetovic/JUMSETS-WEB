import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss']
})
export class NewsCardsComponent implements OnInit {

  cols: number;

  private novosti: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 4;
    this.contentfulService.getProducts()
      .then(novost => this.novosti = novost);
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;

  }



}
