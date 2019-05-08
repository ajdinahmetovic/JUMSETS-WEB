import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {StudentcontentService} from '../studentcontent.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-sekcije',
  templateUrl: './sekcije.component.html',
  styleUrls: ['./sekcije.component.scss']
})
export class SekcijeComponent implements OnInit {

  sekcije: Entry<any>[] = []; // dodano

  lenght;
  scrWidth = window.innerWidth;
  rows4: number;
  lastRow;

  constructor(private contentfulService: StudentcontentService) { }

  ngOnInit() {

    this.contentfulService.getSekcije()
      .then((sekcije) => {

        this.sekcije = sekcije;

        this.lenght = this.sekcije.length;

        this.rows4 = Math.floor(this.lenght / 4);
        console.log( 'ROWS', this.rows4);
        this.lastRow = this.lenght % 4;
        console.log( 'LASTROW', this.rows4);

      });

  }

}
