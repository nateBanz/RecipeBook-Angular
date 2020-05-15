import { Injectable} from '@angular/core';
import {Recipe} from './Recipe Book/recipe.model';
import {Ingredient} from './Shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RbookService {

private AllRecipes:Recipe[] = [new Recipe("Fritters","Such a good food to eat!", "http://www.taste.com.au/images/recipes/wfr/2005/05/13773.jpg", [
  new Ingredient('Flour',2),
  new Ingredient("Sugar", 5),
  new Ingredient("Banana", 4)])];
  recipesChanged = new Subject<Recipe[]>();
  constructor(private slserve: ShoppingService) { }

  getRecipes(){
    return this.AllRecipes.slice();
  }

  addtoShop(ing:Ingredient[]){
    this.slserve.addIngforserve(ing);
  }

  getRec(index:number){
    return this.AllRecipes[index];

  }

  addRecipes(recipes: Recipe){
    this.AllRecipes.push(recipes);
    this.recipesChanged.next(this.AllRecipes.slice());
  }

  updateRecipes(index: number, updatedRecipe: Recipe){
    this.AllRecipes[index]= updatedRecipe;
    this.recipesChanged.next(this.AllRecipes.slice());
  }

  onDelete(index:number){
    this.AllRecipes.splice(index,1);
    this.recipesChanged.next(this.AllRecipes.slice());
  }
}
