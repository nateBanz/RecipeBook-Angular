import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './Header/head/head.component';
import { NgxPopper } from 'angular-popper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RbookService} from './rbook.service';
import {ShoppingService} from './shopping.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';

import {AuthInterceptor} from './auth/auth.interceptor';

import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './Recipe Book/shopping-list/shopping-list.module';
import {SharedModule} from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

    HeadComponent,

    AuthComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPopper,

    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule

  ],
  providers: [RbookService,ShoppingService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
