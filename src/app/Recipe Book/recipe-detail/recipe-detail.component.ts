import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RbookService} from '../../rbook.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeFromItem: Recipe;
  id:number;
  constructor(private recipeserve: RbookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipeFromItem = this.recipeserve.getRec(this.id);
      }
    )
  }
  AddToShopping(){
    this.recipeserve.addtoShop(this.recipeFromItem.ingredients)
  }
  editRecipe(){
    //this.router.navigate(['edit'], {relativeTo:this.route});
    //alternative
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }

  deleteRecipe(){
    this.recipeserve.onDelete(this.id);
    this.router.navigate(['/recipes']);
  }

  onDeleteIngredient(){

  }
}
