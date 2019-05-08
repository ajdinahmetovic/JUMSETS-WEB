import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

   events: Entry<any>[] = []; // dodano
   topEvents: Entry<any>[] = []; // dodano


  constructor(private contentfulService: ContentfulService, private router: Router) {

  }

  ngOnInit() {

    this.contentfulService.getEvents()
      .then((events) => {

        this.events = events;


        this.events.sort(function(a, b) {
          const dateA = new Date(a.sys.createdAt) as any, dateB = new Date(b.sys.createdAt) as any;
          return dateA - dateB;
        });

        // this.events.reverse();


        this.topEvents = this.events.slice(0, 4);


      });

  }


}
