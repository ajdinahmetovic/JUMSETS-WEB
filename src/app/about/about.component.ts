import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import {ContentfulService} from '../contentful.service'; // dodano

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private oSkoli: Entry<any>[] = []; // dodano


  cols;

  constructor(private contentfulService: ContentfulService) {

    if (window.innerWidth < 990) {
      this.cols = 1;

    } else {
      this.cols = 2;
    }



  }

  ngOnInit() {

    this.contentfulService.getOskoli()
      .then(oSkoli => this.oSkoli = oSkoli);

  }

}
