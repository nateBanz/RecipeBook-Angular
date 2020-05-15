import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RbookService} from '../../rbook.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() wasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  constructor(private RecServe: RbookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.RecServe.getRecipes();
    this.RecServe.recipesChanged.subscribe((updatedrecipes)=> {
      this.recipes = updatedrecipes;
      }
    )
  }
  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
