import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.scss']
})
export class NewsAllComponent implements OnInit {

  private novosti: Entry<any>[] = []; // dodano


  id = 0;


  async titleChanger() {

    while (true) {

      this.delay(500);
      this.id++;
      if (this.id === 3) {
          this.id = 0;
      }

    }

  }

  constructor(private contentfulService: ContentfulService) {
    // this.titleChanger();
  }

  ngOnInit() {

    this.contentfulService.getNovosti()
      .then(novost => this.novosti = novost);

  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
