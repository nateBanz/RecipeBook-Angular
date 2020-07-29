import { NgModule } from '@angular/core';
import {ShoppingLIstComponent} from '../../Shopping List/shopping-list/shopping-list.component';
import {EditComponent} from '../../Shopping List/edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../Shared/shared.module';

const routes : Routes = [
  {path: '', component: ShoppingLIstComponent }];

@NgModule({
  declarations: [
    ShoppingLIstComponent,
    EditComponent,
  ],
  imports: [
   RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingListModule { }
