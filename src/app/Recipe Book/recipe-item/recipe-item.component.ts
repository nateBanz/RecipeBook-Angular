import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RbookService} from '../../rbook.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipe;
  @Input() index: number;

  constructor(private recipesServe: RbookService) {
  }
  ngOnInit(): void {
  }
//this may need a subscription
  showDiv(){
    this.recipesServe.showDiv();
    //console.log(this.recipesServe.getShow());

  }
}
