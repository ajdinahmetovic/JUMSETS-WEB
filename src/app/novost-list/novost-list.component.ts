import { Component, OnInit } from '@angular/core';
import { ContentfulService, } from '../contentful.service'; // dodan service za cf
import { Entry } from 'contentful'; // dodano

@Component({
  selector: 'app-novost-list',
  templateUrl: './novost-list.component.html',
  styleUrls: ['./novost-list.component.scss']
})
export class NovostListComponent implements OnInit {

  private novost: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) { // dodano

  }

  ngOnInit() { // dodano
    this.contentfulService.getProducts()
    .then(novost => this.novost = novost);
  }

}
