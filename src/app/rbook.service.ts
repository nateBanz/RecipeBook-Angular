import { Injectable} from '@angular/core';
import {Recipe} from './Recipe Book/recipe.model';
import {Ingredient} from './Shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RbookService implements Resolve<Recipe[]>{
//I want to always load some recipes. They are stored in firebase though.
private AllRecipes:Recipe[] = [new Recipe("Fritters","Such a good food to eat!", "http://www.taste.com.au/images/recipes/wfr/2005/05/13773.jpg", [
  new Ingredient('Flour',2),
  new Ingredient("Sugar", 5),
  new Ingredient("Banana", 4)])];
  recipesChanged = new Subject<Recipe[]>();

  private randomImages = ['https://i.pinimg.com/originals/d3/36/d6/d336d6c4d2c3ec833100c546275f9ba8.jpg',
    'https://www.thinkeatdrink.com/wp-content/uploads/2014/10/shawarma.jpg', 'https://images.unsplash.com/photo-1537200900027-35a21559e661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  , 'https://images.unsplash.com/photo-1504388192519-fb4be897c4d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'];

  private show: boolean = false;

  formatDiv = new Subject<boolean>();

  constructor(private slserve: ShoppingService, private http: HttpClient, private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.getRecipes();
    if (recipes.length == 0){
      return this.fetchRecipes();
    }
    else{
      return recipes;
    }
  }
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

  storeRecipes(){
    const recipes = this.getRecipes();
    this.http.put('https://recipebook-7ae2a.firebaseio.com/recipes.json',recipes).
    subscribe(response =>{
    console.log(response);});
  }

  fetchRecipes(){

      return this.http.get<Recipe[]>('https://recipebook-7ae2a.firebaseio.com/recipes.json',
        ).pipe(
        map(recipes => {
        return recipes.map(recipe=>{
          //get the existing data, if ingredients has ingredients in the array, it stays as is. Otherwise, itll set ingredients to an empty array rather than being nonexistent
          return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []
          };
        });
      }),
        tap(recipes=>{
          this.setRecipes(recipes);
        })
      )
  }
  setRecipes(recipes: Recipe[]){
    this.AllRecipes = recipes;
    this.recipesChanged.next(this.AllRecipes.slice());

  }

  getRandomImages(){
    return this.randomImages;
  }

  showDiv(){
    //change the value then emit the opposite to something else to subscribe to. If the value doesnt change, the function will emit the same thing every time.
    this.show = !this.show;
    this.formatDiv.next(!this.show);
  }

  getShow(){
    return this.show;
  }
  setDiv(){
    this.show = false;
  }
}
