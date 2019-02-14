import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
}
