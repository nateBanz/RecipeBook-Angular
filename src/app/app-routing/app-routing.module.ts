import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';





const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch:'full'},
  { path: 'shopping-list', loadChildren: () => import('src/app/Recipe Book/shopping-list/shopping-list.module').then(mod=> mod.ShoppingListModule) },
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(mod=> mod.AuthModule) },
  { path: 'recipes', loadChildren: ()=> import('src/app/recipes/recipes.module').then(m => m.RecipesModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
