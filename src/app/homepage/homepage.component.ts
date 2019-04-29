import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var particlesJS: any;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigate(id) {

    if (id === 0) {
      this.router.navigate(['/']);

    } else if (id === 1) {

      this.router.navigate(['/oskoli']);
    }

  }

  ngAfterViewInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() { console.log('callback - particles.js config loaded'); });
  }

}
