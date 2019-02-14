import { Component, AfterViewInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

    ngAfterViewInit(){
      particlesJS.load('particles-js', 'assets/particles.json', function() { console.log('callback - particles.js config loaded'); });
  }

}
