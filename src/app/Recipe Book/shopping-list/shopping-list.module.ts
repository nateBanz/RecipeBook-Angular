import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingLIstComponent} from '../../Shopping List/shopping-list/shopping-list.component';
import {EditComponent} from '../../Shopping List/edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes : Routes = [
  {path: 'shopping-list', component: ShoppingLIstComponent }];

@NgModule({
  declarations: [
    ShoppingLIstComponent,
    EditComponent,
  ],
  imports: [
   RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingListModule { }
