import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipeListComponent } from './Recipe Book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipe Book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe Book/recipe-detail/recipe-detail.component';
import { ShoppingLIstComponent } from './Shopping List/shopping-list/shopping-list.component';
import { EditComponent } from './Shopping List/edit/edit.component';
import { HeadComponent } from './Header/head/head.component';
import { NgxPopper } from 'angular-popper';
import { RecipeComponent } from './Recipe Book/recipe/recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RbookService} from './rbook.service';
import {ShoppingService} from './shopping.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { RecipeStartComponent } from './Recipe Book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Recipe Book/recipe-edit/recipe-edit.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import {AuthInterceptor} from './auth/auth.interceptor';
import { AlertComponent } from './Shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingLIstComponent,
    EditComponent,
    HeadComponent,
    RecipeComponent,
    RecipeStartComponent,
    RecipeEditComponent,
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
    HttpClientModule

  ],
  providers: [RbookService,ShoppingService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
