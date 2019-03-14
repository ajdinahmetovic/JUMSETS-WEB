import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';

const CONFIG = {
  space: 'eyict3iolun1',
  accessToken: 'ca09a148a157033fefa0fce9458a66f04c694d9a4f95276f23eae52b4f20c6c2',

  contentTypeIds: {
    novost: 'novost',
    oSkoli: 'oSkoli',
    uposlenici: 'uposlenici',
    smjerovi: 'smjerovi',
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { } //template za data fetch

  getNovosti(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.novost
    }, query))
    .then(res => res.items);
  }


  getOskoli(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.oSkoli
    }, query))
      .then(res => res.items);
  }


  getUposlenici(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.uposlenici
    }, query))
      .then(res => res.items);
  }

  getSmjerovi(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.smjerovi
    }, query))
      .then(res => res.items);
  }

}
