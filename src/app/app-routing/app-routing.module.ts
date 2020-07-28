import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingLIstComponent} from '../Shopping List/shopping-list/shopping-list.component';
import {AuthComponent} from '../auth/auth.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full'},
   {path: 'shopping-list', component: ShoppingLIstComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
