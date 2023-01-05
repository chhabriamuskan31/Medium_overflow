import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MediumHeaderComponent } from './medium-header/medium-header.component';
import { MediumContentComponent } from './medium-content/medium-content.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewDetailsComponent } from './view-details/view-details.component'


@NgModule({
  declarations: [
    MediumComponent,
    MediumHeaderComponent,
    MediumContentComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
})
export class MediumModule { }
