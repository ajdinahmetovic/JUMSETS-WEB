import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';

const CONFIG = {
  space: '150kpl2i5bqd',
  accessToken: '8472ff3ac0821f98ec28f4ceb493097cf7419c7bffe2b08b8d47db4e914d01ed',

  contentTypeIds: {
    oglasnaPloca: 'oglasnaPloca',
    sekcije: 'sekcije',
    blogSekcija: 'blogSekcija',
    informacijeOVijecuUcenika: 'informacijeOVijecuUcenika'

  }
};

@Injectable({
  providedIn: 'root'
})
export class StudentcontentService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }



  getOglasi(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.oglasnaPloca
    }, query))
      .then(res => res.items);
  }

  getSekcije(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.sekcije
    }, query))
      .then(res => res.items);
  }

  getBlogSekcije(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogSekcija
    }, query))
      .then(res => res.items);
  }

  getUInfo(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.informacijeOVijecuUcenika
    }, query))
      .then(res => res.items);
  }




}
