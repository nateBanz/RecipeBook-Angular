import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,




  ],
  imports: [
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    CollapseModule,
    BsDropdownModule,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule { }
