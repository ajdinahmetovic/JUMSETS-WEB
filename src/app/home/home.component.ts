import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 600) ? 1 : 4;
  }
  onResize(event) {
    this.cols = (event.target.innerWidth <= 600) ? 1 : 4;
  }



}
