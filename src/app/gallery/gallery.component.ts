import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private galerija: Entry<any>[] = []; // dodano


  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.contentfulService.getGallery()
      .then(picture => this.galerija = picture);

    console.log(this.galerija);
  }

}
