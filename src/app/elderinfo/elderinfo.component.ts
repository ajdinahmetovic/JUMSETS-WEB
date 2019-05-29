import {Component, Inject, OnInit} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-elderinfo',
  templateUrl: './elderinfo.component.html',
  styleUrls: ['./elderinfo.component.scss']
})
export class ElderinfoComponent implements OnInit {

  oglasi: Entry<any>[] = []; // dodano

  width = window.innerWidth;


  constructor(private contentfulService: ContentfulService) {





  }



  ngOnInit() {
    this.contentfulService.getElderInfo()
      .then((oglasi) => this.oglasi = oglasi);
  }

}
