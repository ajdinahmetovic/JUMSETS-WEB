import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content1',
  templateUrl: './about-content1.component.html',
  styleUrls: ['./about-content1.component.scss']
})
export class AboutContent1Component implements OnInit {

  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 2;

  }
}
