import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  private uposlenici: Entry<any>[] = []; // dodano
  profesori: Entry<any>[] = []; // dodano
  private administracija: Entry<any>[] = []; // dodano
  private radnoOsoblje: Entry<any>[] = []; // dodano




  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getUposlenici()
      .then(uposlenici => this.uposlenici = uposlenici);



  }




}
