import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {ActivatedRoute} from '@angular/router';
import {StudentcontentService} from '../studentcontent.service';

@Component({
  selector: 'app-vijecer',
  templateUrl: './vijecer.component.html',
  styleUrls: ['./vijecer.component.scss']
})
export class VijecerComponent implements OnInit {


  img = '../../assets/vroditelja.png';
  smjerObj;
  tip;
  title = 'Vijece roditelja';

  constructor(private contentfulService: ContentfulService, private studentService: StudentcontentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tip = this.route.snapshot.params['tip'];

    if (this.tip === 'roditelji') {
      this.img = '../../assets/vroditelja.png';
      this.title = 'Vijece roditelja';
      this.contentfulService.getRInfo().then(info => {
        this.smjerObj = info[info.length - 1];
      });
    } else if (this.tip === 'ucenici') {
      this.img = '../../assets/vijece.png';
      this.title = 'Vijece ucenika';
      this.studentService.getUInfo().then(info => {
        this.smjerObj = info[info.length - 1];
      });
    }
  }

}
