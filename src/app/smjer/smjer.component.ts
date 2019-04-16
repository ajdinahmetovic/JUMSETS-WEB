import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-smjer',
  templateUrl: './smjer.component.html',
  styleUrls: ['./smjer.component.scss']
})
export class SmjerComponent implements OnInit {


  img;
  smjerObj;
  smjerId;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.smjerId = this.route.snapshot.params['id'];

    this.contentfulService.getSmjerovi().then(smjerovi => {


      for (let i = 0; i < smjerovi.length; i++) {
        if (this.isId(smjerovi[i])) {this.smjerObj = smjerovi[i]; }
      }

    });


  }




  isId(obj) {
    return obj.sys.id === this.smjerId;
  }


}
