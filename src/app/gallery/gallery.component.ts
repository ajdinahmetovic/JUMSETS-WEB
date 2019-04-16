import {Component, OnInit, ViewChild} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild('basicModal') modal: ModalDirective;

  private galerija: Entry<any>[] = []; // dodano

   currImg;
   title;

   cols = 3;
   galCols = 5;
   colspan = 2;


  constructor(private contentfulService: ContentfulService) {

    if (window.innerWidth < 990) {

      this.cols = 1;
      this.colspan = 1;
      this.galCols = 3;

    } else {

      this.cols = 3;
      this.colspan = 2;
      this.galCols = 5;

    }
  }

  ngOnInit() {

    this.contentfulService.getGallery()
      .then(picture => this.galerija = picture);

    console.log(this.galerija);
  }


  showImg(arg) {
    this.currImg = arg.fields.fotovideo.fields.file.url;
    this.title = arg.fields.opis;
    this.modal.show();


  }


}
