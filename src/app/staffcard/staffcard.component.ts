import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staffcard',
  templateUrl: './staffcard.component.html',
  styleUrls: ['./staffcard.component.scss']
})
export class StaffcardComponent implements OnInit {

  @Input() img;
  @Input() title: string;
  @Input() desc: string;
  @Input() descLong: string;




  constructor() { }

  ngOnInit() {
  }

}
