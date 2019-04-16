import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentfulService} from '../contentful.service';
import {Entry} from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {combineAll} from 'rxjs/operators';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

@Component({
  selector: 'app-detailsnews',
  templateUrl: './detailsnews.component.html',
  styleUrls: ['./detailsnews.component.scss']
})
export class DetailsnewsComponent implements OnInit {


  img;
  title;
  content;
  contentId;
  parsed;

  private novosti: Entry<any>[] = []; // dodano


  options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => '<custom-component>${customComponentRenderer(node)}</custom-component>'
    }
  };


  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {

    console.log('id' + this.contentId);

  }

  ngOnInit() {

    this.contentId = this.route.snapshot.params['id'];
    this.contentfulService.getNovosti()
      .then(novost => {

        this.novosti = novost;

        for (let i = 0; i < this.novosti.length; i++) {
          if (this.isId(this.novosti[i])) {this.content = this.novosti[i]; }
        }



        this.parsed = documentToHtmlString(this.content.fields.opis as any, this.options as any);

      });






  }



  isId(obj) {
    return obj.sys.id === this.contentId;
  }


}
