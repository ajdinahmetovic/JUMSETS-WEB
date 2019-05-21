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

  hoveredId;

  isInfo = false;

  itemClasses = {
    container: 'item',
    title: 'title-block',
    img: 'blur-img'
  };


  thirdClass = 'active';
  fourthClass = 'inactive';
  infoClass = 'gray-block-oglas';

  topNews = [];

  comment = null;

  novosti: Entry<any>[] = []; // dodano

  newsTitle = '';

  options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => '<custom-component>${customComponentRenderer(node)}</custom-component>'
    }
  };

  constructor(private contentfulService: ContentfulService, private router: Router) {

    if (window.innerWidth < 1600) {
      this.newsCols = 2;
      this.infoCols = 3;
      this.infoColspan = 1;
      this.elderCols = 2;
    } else if (window.innerWidth < 990) {
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
      } );

    this.contentfulService.getOskoli()
      .then((oSkoli) => {
        this.oSkoli = oSkoli;
        this.newsTitle = this.oSkoli[0].fields.tekst;
      });

  }

  navigate(id) {
    this.router.navigateByUrl('/novost/' + id);

  }


  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;
  }

  elderDevelopment (id) {
    if (id === 0) {
      this.isInfo = true;
      this.infoClass = 'gray-block-oglas-active';
      this.thirdClass = 'inactive';
      this.fourthClass = 'inactive';
    } else if (id === 1) {
      this.isInfo = false;
      this.infoClass = 'gray-block-oglas';
      this.fourthClass = 'inactive';
      this.thirdClass = 'active';
    } else if (id === 2) {
      this.isInfo = false;
      this.infoClass = 'gray-block-oglas';
      this.fourthClass = 'active';
      this.thirdClass = 'inactive';
    }
  }


  hover(id) {

    this.hoveredId = id;
    this.itemClasses = {
      container: 'item-hover',
      title: 'title-block-hover',
      img: 'blur-img'
    };


  }

  hoverEnd(id) {

    this.hoveredId = -1;
    this.itemClasses = {
      container: 'item',
      title: 'title-block',
      img: 'blur-img'
    };
  }



}
