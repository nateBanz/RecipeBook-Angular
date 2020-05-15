import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RbookService} from '../../rbook.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 @Output() wasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  subscription: Subscription;
  constructor(private RecServe: RbookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.RecServe.getRecipes();
    this.subscription = this.RecServe.recipesChanged.subscribe((updatedrecipes)=> {
      this.recipes = updatedrecipes;
      }
    )
  }
  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
