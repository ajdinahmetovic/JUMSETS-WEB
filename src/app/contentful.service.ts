import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';

const CONFIG = {
  space: 'eyict3iolun1',
  accessToken: 'ca09a148a157033fefa0fce9458a66f04c694d9a4f95276f23eae52b4f20c6c2',

  contentTypeIds: {
    novost: 'novost'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { } //template za data fetch

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.novost
    }, query))
    .then(res => res.items);
  }

}
