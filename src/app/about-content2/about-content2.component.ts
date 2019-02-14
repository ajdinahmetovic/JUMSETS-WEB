import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-content2',
  templateUrl: './about-content2.component.html',
  styleUrls: ['./about-content2.component.scss']
})

@Injectable()
export class AboutContent2Component implements OnInit {

  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 2;

  }


}
