import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content4',
  templateUrl: './about-content4.component.html',
  styleUrls: ['./about-content4.component.scss']
})
export class AboutContent4Component implements OnInit {

  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 2;

  }


}
