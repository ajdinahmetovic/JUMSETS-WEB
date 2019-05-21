import { Component, OnInit } from '@angular/core';
import { ContentfulService, } from '../contentful.service'; // dodan service za cf
import { Entry } from 'contentful'; // dodano

@Component({
  selector: 'app-novost-list',
  templateUrl: './novost-list.component.html',
  styleUrls: ['./novost-list.component.scss']
})
export class NovostListComponent implements OnInit {

  novost: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) { // dodano

  }

  ngOnInit() { // dodano

  }

}
