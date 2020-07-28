import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeListComponent} from '../Recipe Book/recipe-list/recipe-list.component';
import {RecipeItemComponent} from '../Recipe Book/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from '../Recipe Book/recipe-detail/recipe-detail.component';
import {RecipeComponent} from '../Recipe Book/recipe/recipe.component';
import {RecipeStartComponent} from '../Recipe Book/recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../Recipe Book/recipe-edit/recipe-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../auth/auth.guard';
import {RbookService} from '../rbook.service';

const routes: Routes = [
  { path: 'recipes', component:RecipeComponent,
    canActivate: [AuthGuard],
    children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RbookService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RbookService]}
    ]
}

];

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    
  ]

})
export class RecipesModule { }
