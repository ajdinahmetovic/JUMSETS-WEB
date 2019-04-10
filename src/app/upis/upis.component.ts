import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';

@Component({
  selector: 'app-upis',
  templateUrl: './upis.component.html',
  styleUrls: ['./upis.component.scss']
})
export class UpisComponent implements OnInit {

  private smjerovi: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) {

  }

  ngOnInit() {

    this.contentfulService.getSmjerovi()
      .then(smjerovi => this.smjerovi = smjerovi);

  }

}
