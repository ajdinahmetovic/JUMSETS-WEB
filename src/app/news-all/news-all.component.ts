import {Component, OnInit, ViewChild} from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';
import {Router} from '@angular/router';
import {container} from '@angular/core/src/render3';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.scss']
})
export class NewsAllComponent implements OnInit {

  constructor(private contentfulService: ContentfulService, private router: Router) {

    if (window.innerWidth < 990) {
      this.container = 'container-news-mobile';

      this.sliderWidth = this.scrWidth;
      this.sliderHeight = 0.50 * this.scrHeight;

    } else {
      this.container = 'container-news';
    }

    // this.titleChanger();
  }

  @ViewChild('slider') slider: NgImageSliderComponent;




  scrHeight = window.innerHeight;
  scrWidth = window.innerWidth;

  container = 'container-news';



  sliderWidth = 0.60 * this.scrWidth;
  sliderHeight = 0.80 * this.scrHeight;

  id = 0;

  imgs: Array<object> = [];


  private novosti: Entry<any>[] = []; // dodano

  async titleChanger() {

    while (true) {

      this.delay(500);
      this.id++;
      if (this.id === 3) {
          this.id = 0;
      }

    }

  }


  ngOnInit() {

    this.contentfulService.getNovosti()
      .then(novost => {
        this.novosti = novost;

        this.novosti.sort(function(a, b) {
          const dateA = new Date(a.sys.createdAt) as any, dateB = new Date(b.sys.createdAt) as any;
          return dateA - dateB;
        });

        this.novosti.reverse();
        const arr = [];

        this.novosti.slice(0, 3).forEach(function (value) {

          console.log(value.fields.slikeNovosti.fields.file.url);
          arr.push({
              image: value.fields.slikeNovosti.fields.file.url,
              thumbImage: value.fields.slikeNovosti.fields.file.url
          });
        });

        this.imgs = arr;
     });

  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  navigate(id) {
    this.router.navigateByUrl('/novost/' + id);
  }

  next(event) {
    if (event === 'next') {
      if (this.id === 2) {
        this.id = -1;
      }
      this.id++;
    } else if (event === 'previous') {
      if (this.id === 0) {
        this.id = 3;
      }
      this.id--;
    }
    console.log(event);
  }


}
