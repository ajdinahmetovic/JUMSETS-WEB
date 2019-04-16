import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StaffComponent} from './staff/staff.component';
import {NewsAllComponent} from './news-all/news-all.component';
import {GalleryComponent} from './gallery/gallery.component';
import {UpisComponent} from './upis/upis.component';
import {DetailsnewsComponent} from './detailsnews/detailsnews.component';
import {SmjerComponent} from './smjer/smjer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oskoli', component: AboutComponent},
  {path: 'osoblje', component: StaffComponent},
  {path: 'novosti', component: NewsAllComponent},
  {path: 'galerija', component: GalleryComponent},
  {path: 'upis', component: UpisComponent},
  {path: 'novost/:id', component: DetailsnewsComponent },
  {path: 'smjer/:id', component: SmjerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
