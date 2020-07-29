import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './Header/head/head.component';
import { NgxPopper } from 'angular-popper';


import {AppRoutingModule} from './app-routing/app-routing.module';
import { HttpClientModule} from '@angular/common/http';





import {ShoppingListModule} from './Recipe Book/shopping-list/shopping-list.module';
import {SharedModule} from './Shared/shared.module';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,

    HeadComponent,

    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPopper,
    AppRoutingModule,
    HttpClientModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule,
    RecipesModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
