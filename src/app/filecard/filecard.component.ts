import {Component, Input, OnInit} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-filecard',
  templateUrl: './filecard.component.html',
  styleUrls: ['./filecard.component.scss']
})
export class FilecardComponent implements OnInit {

  @Input() title;
  @Input() date;



  img = '../../assets/file_ico.png';

  constructor(public ngxSmartModalService: NgxSmartModalService) {

  }

  ngOnInit() {

  }

}
