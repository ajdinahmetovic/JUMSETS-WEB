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
import {UceniciComponent} from './ucenici/ucenici.component';
import {SekcijeComponent} from './sekcije/sekcije.component';
import {SekcijedetailsComponent} from './sekcijedetails/sekcijedetails.component';
import {RoditeljiComponent} from './roditelji/roditelji.component';
import {VijecerComponent} from './vijecer/vijecer.component';
import {KonsultacijeComponent} from './konsultacije/konsultacije.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oskoli', component: AboutComponent},
  {path: 'osoblje', component: StaffComponent},
  {path: 'novosti', component: NewsAllComponent},
  {path: 'galerija', component: GalleryComponent},
  {path: 'skolovanje/:tip', component: UpisComponent},
  {path: 'novost/:id', component: DetailsnewsComponent },
  {path: 'smjer/:id', component: SmjerComponent},
  {path: 'ucenici', component: UceniciComponent},
  {path: 'sekcije', component: SekcijeComponent},
  {path: 'sekcija/:id', component: SekcijedetailsComponent},
  {path: 'roditelji', component: RoditeljiComponent},
  {path: 'vijece/:tip', component: VijecerComponent},
  {path: 'informacije', component: KonsultacijeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
