import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentfulService, } from '../contentful.service'; // dodan service za cf
import { Entry } from 'contentful'; // dodano

declare var particlesJS: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols: number;

  newsCols = 4;
  infoCols = 3;
  infoColspan = 1;
  elderCols = 2;


  thirdClass = 'active';
  fourthClass = 'inactive';

  topNews = [];

  private novosti: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) {


    if(window.innerWidth < 990) {
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

  title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et pellentesque diam. Proin ut mauris a lorem varius sodales vel non tellus. Vivamus ac dictum orci. Nam scelerisque vitae dolor id aliquet. Suspendisse lacus odio, ultricies et odio ut, facilisis aliquam massa. Vestibulum tempus facilisis enim, eget tincidunt ligula molestie id. Integer eu sodales risus, ut convallis arcu. Quisque et nisi a lectus faucibus tincidunt vel ac enim. Vestibulum sodales risus at lacinia cursus. Etiam feugiat, dolor id ultrices bibendum, justo quam auctor arcu, ut viverra nisl ante eget sapien. Curabitur vulputate nulla id iaculis sollicitudin. Ut facilisis dictum ullamcorper. Pellentesque non posuere mauris. Proin semper vehicula nulla ut placerat. Praesent purus ante, posuere sed mi ornare, gravida vulputate metus. Praesent sed tincidunt dolor.\n' +
    '\n' +
    'Nullam ac nisl mauris. Suspendisse pulvinar lacinia interdum. Duis gravida sem nec est lobortis, in venenatis quam imperdiet. Nullam et enim eros. Aliquam mollis enim eu semper tempor. Mauris vehicula ut ipsum convallis convallis. Sed ultricies nisi eget sagittis pretium.\n' +
    '\n' +
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec viverra ultrices consequat. Nulla eu dolor consectetur ex pulvinar cursus eget sit amet dui. Nam posuere lacus urna, sit amet maximus risus interdum id. Donec viverra turpis et nunc posuere, eu congue erat sodales. Curabitur ac purus malesuada turpis bibendum ultricies id et ligula. Nam nec consequat neque, a tristique orci. Quisque tempor metus sed nisl auctor, eu venenatis dolor placerat. Aliquam commodo neque et tincidunt imperdiet. Etiam a tellus blandit, dignissim sapien sit amet, suscipit velit. Etiam tellus tellus, bibendum eget rutrum vel, aliquet in ligula. Vivamus nunc nisl, tempor quis nulla ac, aliquet pellentesque leo. Mauris lobortis interdum tempus. Proin tincidunt ';


  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 4;
    this.contentfulService.getNovosti()
      .then(novost => this.novosti = novost);
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;

  }

  ngAfterViewInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() { console.log('callback - particles.js config loaded'); });
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

  moreOrLess(expanded) {

    if (expanded) {
      this.len = this.title.length;
      this.boolExpanded = true;
    } else {
      this.len = 270;
      this.boolExpanded = false;
    }

  }



}
