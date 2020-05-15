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
}
