import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {StudentcontentService} from '../studentcontent.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sekcijedetails',
  templateUrl: './sekcijedetails.component.html',
  styleUrls: ['./sekcijedetails.component.scss']
})
export class SekcijedetailsComponent implements OnInit {

  sekcije: Entry<any>[] = []; // dodano
  blog: Entry<any>[] = []; // dodano

  width = window.innerWidth;



  obj;

  constructor(private contentfulService: StudentcontentService, private route: ActivatedRoute) { }

  ngOnInit() {

    let obj;

    this.contentfulService.getSekcije()
      .then((sekcije) => {

        this.sekcije = sekcije;

        this.obj = sekcije[this.route.snapshot.params['id']];

        obj = this.obj;

        this.contentfulService.getBlogSekcije()
          .then((blog) => {

            let arr = [];

            console.log('BLOG::', this);

            blog.forEach(function (value) {
              console.log('LOG::', value);
              if (value.fields.sekcija === obj.fields.naziv.substring(0, obj.fields.naziv.indexOf(' '))) {
                arr.push(value);
                console.log(value);
              }

            });

            this.blog = arr;

          });


      });








  }

}
