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
  private profesori: Entry<any>[] = []; // dodano
  private administracija: Entry<any>[] = []; // dodano
  private radnoOsoblje: Entry<any>[] = []; // dodano

  constructor(private contentfulService: ContentfulService) {



  }

  ngOnInit() {
    this.contentfulService.getUposlenici()
      .then((uposlenici) => {
        for (let i = 0; i < uposlenici.length; i++) {
          if (uposlenici[i].fields.funkcija === 'Profesor') {
            // console.log(this.uposlenici[i].fields.name);
            this.profesori.push(uposlenici[i]);
          } else if (uposlenici[i].fields.funkcija === 'Administracija') {
            this.administracija.push(uposlenici[i]);
          } else if (uposlenici[i].fields.funkcija === 'Radno osoblje') {
            this.radnoOsoblje.push(uposlenici[i]);
          }
        }
      });





  }

  updateEver(arr){
    for (let i = 0; i < this.uposlenici.length; i++) {
      if (this.uposlenici[i].fields.funkcija === 'Profesor') {
        console.log(this.uposlenici[i].fields.name);
        this.profesori.push(this.uposlenici[i]);
      }
    }
  }




}
