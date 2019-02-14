import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content3',
  templateUrl: './about-content3.component.html',
  styleUrls: ['./about-content3.component.scss']
})
export class AboutContent3Component implements OnInit {

  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 2;

  }
}
