import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-upis',
  templateUrl: './upis.component.html',
  styleUrls: ['./upis.component.scss']
})
export class UpisComponent implements OnInit {

   smjerovi: Entry<any>[] = []; // dodano
   help: Entry<any>[] = []; // dodano

  pageComingSoon = false;


  constructor(private contentfulService: ContentfulService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {


      this.contentfulService.getSmjerovi()
        .then((smjerovi) => {

          this.help = smjerovi;

          let arr = [];

          if (this.route.snapshot.params['tip'] === 'redovno') {

            this.help.forEach(function (value) {

              if (value.fields.skolovanje === 'Redovno') {
                arr.push(value);
              }
            });



          } else if (this.route.snapshot.params['tip'] === 'vanredno') {

            this.help.forEach(function (value) {

              if (value.fields.skolovanje === 'Vanredno') {
                arr.push(value);
              }
            });

          }



          this.smjerovi = arr;

          this.pageComingSoon = this.smjerovi.length === 0;

        });

  }



  navigate(id) {
    this.router.navigateByUrl('/smjer/' + id);

  }


}
