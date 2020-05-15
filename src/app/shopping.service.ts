import { Injectable} from '@angular/core';
import {Ingredient} from './Shared/ingredient.model';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientChange = new Subject<Ingredient[]>();
  IngredientSelect = new Subject<Ingredient>();
  editing = new Subject<number>();
  private ingredients: Ingredient[] = [new Ingredient("Apples", 20), new Ingredient("Taters", 2)];
  constructor() { }

  getIngred(){
    return this.ingredients.slice();
  }
  getIngredient(Index: number) {
    return this.ingredients[Index];
  }

  addIng(ingre: Ingredient){
    this.ingredients.push(ingre);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngforserve(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient ){
    this.ingredients[index] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());

  }
}
