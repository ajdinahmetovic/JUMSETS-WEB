import {Component, Inject, OnInit} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {StudentcontentService} from '../studentcontent.service';
import {Entry} from 'contentful';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html',
  styleUrls: ['./ucenici.component.scss']
})
export class UceniciComponent implements OnInit {

  private oglasi: Entry<any>[] = []; // dodano

  width = window.innerWidth;


  constructor(private contentfulService: StudentcontentService, @Inject(DOCUMENT) private document: any) { }



  ngOnInit() {
    this.contentfulService.getOglasi()
      .then((oglasi) => this.oglasi = oglasi);
  }

  openMoodle(): void {
    this.document.location.href = 'http://www.etsedu.org';
  }

}
