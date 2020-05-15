import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RbookService} from '../../rbook.service';
import {Ingredient} from '../../Shared/ingredient.model';
import {Recipe} from '../recipe.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode= false;
recipeForm: FormGroup;
recipesChanged = new Subject<Recipe>();
  constructor(private route: ActivatedRoute, private receipeS: RbookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params :Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForom();
      }
    );
  }
  private initForom(){
    let image = '';
    let descript = '';
    let recipeName = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.receipeS.getRec(this.id);
      recipeName = recipe.name;
      descript = recipe.description;
      image  = recipe.imagePath;

      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients){

          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              "amount": new FormControl((ingredient.amount), [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(image, Validators.required),
      'description': new FormControl(descript, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    //const update = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
    console.log(this.recipeForm);
    if(this.editMode){
      this.receipeS.updateRecipes(this.id, this.recipeForm.value);
    }
    else{
      this.receipeS.addRecipes(this.recipeForm.value);
    }
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

}
