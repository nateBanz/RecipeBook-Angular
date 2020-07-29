import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';




const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full'},

  { path: 'recipes', loadChildren: ()=> import('src/app/recipes/recipes.module').then(m => m.RecipesModule)
  }
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
