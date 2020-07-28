import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ShoppingLIstComponent } from './Shopping List/shopping-list/shopping-list.component';
import { EditComponent } from './Shopping List/edit/edit.component';
import { HeadComponent } from './Header/head/head.component';
import { NgxPopper } from 'angular-popper';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RbookService} from './rbook.service';
import {ShoppingService} from './shopping.service';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import {AuthInterceptor} from './auth/auth.interceptor';
import { AlertComponent } from './Shared/alert/alert.component';
import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,

    ShoppingLIstComponent,
    EditComponent,
    HeadComponent,

    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPopper,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule

  ],
  providers: [RbookService,ShoppingService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
