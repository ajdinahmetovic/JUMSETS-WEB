import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Entry} from 'contentful';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  @ViewChild('basicModal') modal: ModalDirective;
  @ViewChild('albumDiv', {read: ElementRef}) elementView: ElementRef;

  private galerija: Entry<any>[] = []; // dodano


  imgs: Array<object> = [{
    image: '../assets/example.jpg',
    thumbImage: '../assets/example.jpg',
  }];


  normalizedArr = [];

  currImg;
  title;

  scrHeight = window.innerHeight;
  scrWidth = window.innerWidth;

  imgWidth;
  imgHeight;

  cols = 3;
  galCols = 4;
  colspan = 2;
  albumH;
  albumV;


  constructor(private contentfulService: ContentfulService) {

    if (window.innerWidth < 990) {

      this.cols = 1;
      this.colspan = 1;
      this.galCols = 1;
      this.imgWidth = this.scrWidth - (0.10 * this.scrWidth) / 3;



    } else {

      this.cols = 3;
      this.colspan = 2;
      this.galCols = 4;

      this.imgWidth = this.scrWidth - (0.10 * this.scrWidth) / 5;

    }
  }

  ngOnInit() {

    this.contentfulService.getGallery()
      .then((picture) => {

        this.galerija = picture;


        const arr = [];

        let album: Array<object> = [];

        this.galerija.forEach(function (value) {
          album = [];
          value.fields.slike.forEach(function (val) {

            album.push({
              image: val.fields.file.url,
              thumbImage: val.fields.file.url
            });

          });


          arr.push({
            title: value.fields.naslovAlbuma,
            imgs: album,
            date: value.sys.createdAt
          });

        });

        this.normalizedArr = arr;
        console.log(arr);


      });

  }

  showImg(arg) {
    this.currImg = arg.fields.fotovideo.fields.file.url;
    this.title = arg.fields.opis;
    this.modal.show();


  }

  ngAfterViewInit() {

  }
}
import {ContentfulService} from '../contentful.service';

import {ModalDirective} from 'angular-bootstrap-md';
