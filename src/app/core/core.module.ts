import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RbookService} from '../rbook.service';
import {ShoppingService} from '../shopping.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../auth/auth.interceptor';



@NgModule({
  providers:[RbookService,ShoppingService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
