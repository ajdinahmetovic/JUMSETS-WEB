import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-konsultacije',
  templateUrl: './konsultacije.component.html',
  styleUrls: ['./konsultacije.component.scss']
})
export class KonsultacijeComponent implements OnInit {

  termini: Entry<any>[] = []; // dodano

  cols = 2;

  constructor(private contentfulService: ContentfulService) {

    if (window.innerWidth < 990) {
      this.cols = 1;
    } else {
      this.cols = 2;
    }


  }

  ngOnInit() {
    this.contentfulService.getTermini()
      .then((termini) => {
        this.termini = termini;
      });
  }

}
