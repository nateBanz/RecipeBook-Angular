import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from '../Recipe Book/recipe/recipe.component';
import {ShoppingLIstComponent} from '../Shopping List/shopping-list/shopping-list.component';
import {RecipeStartComponent} from '../Recipe Book/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from '../Recipe Book/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from '../Recipe Book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full'},
  { path: 'recipes', component:RecipeComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ] },
  {path: 'shopping-list', component: ShoppingLIstComponent }
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
