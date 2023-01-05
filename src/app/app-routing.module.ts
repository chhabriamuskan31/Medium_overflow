import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MediumComponent } from './medium/medium.component';
import { MediumHeaderComponent } from './medium/medium-header/medium-header.component';
import { ViewDetailsComponent } from './medium/view-details/view-details.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [
  {path: 'medium', component:
MediumComponent},
  {path: 'viewDetails', component: ViewDetailsComponent},
  {path: 'profile', component: ProfileComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
