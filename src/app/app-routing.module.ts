import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StaffComponent} from './staff/staff.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oskoli', component: AboutComponent},
  {path: 'osoblje', component: StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
