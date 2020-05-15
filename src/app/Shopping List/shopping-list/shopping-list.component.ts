import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';
import {ShoppingService} from '../../shopping.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingLIstComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] =[];
  private change: Subscription;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngred();
    this.change = this.shoppingService.ingredientChange.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients =  ingredients;
      }
    )
  }

  onEdit( index: number ){
  this.shoppingService.editing.next(index);

  }

  ngOnDestroy(): void {
    this.change.unsubscribe();
  }


}
