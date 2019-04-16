import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upis',
  templateUrl: './upis.component.html',
  styleUrls: ['./upis.component.scss']
})
export class UpisComponent implements OnInit {

  private smjerovi: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService, private router: Router) {

  }

  ngOnInit() {

    this.contentfulService.getSmjerovi()
      .then(smjerovi => this.smjerovi = smjerovi);

  }



  navigate(id) {
    this.router.navigateByUrl('/smjer/' + id);

  }


}
