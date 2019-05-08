import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentfulService, } from '../contentful.service'; // dodan service za cf
import { Entry } from 'contentful'; // dodano
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {combineAll} from 'rxjs/operators';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {Router} from '@angular/router';


declare var particlesJS: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols: number;

  private oSkoli: Entry<any>[] = []; // dodano

  dummyData;

  newsCols = 4;
  infoCols = 3;
  infoColspan = 1;
  elderCols = 2;




  thirdClass = 'active';
  fourthClass = 'inactive';

  topNews = [];

  comment = null;

  private novosti: Entry<any>[] = []; // dodano

  newsTitle = '';

  options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => '<custom-component>${customComponentRenderer(node)}</custom-component>'
    }
  };

  constructor(private contentfulService: ContentfulService, private router: Router) {


    if (window.innerWidth < 990) {
      this.newsCols = 1;
      this.infoCols = 2;
      this.infoColspan = 2;
      this.elderCols = 1;
    } else {
      this.newsCols = 4;
      this.infoCols = 3;
      this.infoColspan = 1;
      this.elderCols = 2;
    }


  }
  len = 270;
  boolExpanded = false;

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 4;
    this.contentfulService.getNovosti()
      .then(novost => {
        this.novosti = novost;

        this.dummyData = novost[0].fields.opis;

        this.comment = documentToHtmlString(this.dummyData as any, this.options as any);

        console.log(this.dummyData);

        // console.log(this.comment)

      } );



    this.contentfulService.getOskoli()
      .then((oSkoli) => {
        this.oSkoli = oSkoli;

        this.newsTitle = this.oSkoli[0].fields.tekst;

      });

  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;

  }




  elderDevelopment (id) {

    if (id === 0) {
      this.thirdClass = 'active';
      this.fourthClass = 'inactive';


    } else {

      this.fourthClass = 'active';
      this.thirdClass = 'inactive';


    }


  }



  navigate(id) {
    this.router.navigateByUrl('/novost/' + id);

  }


}
