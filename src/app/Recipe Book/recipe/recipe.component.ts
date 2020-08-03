import { Component, OnInit } from '@angular/core';
import {RbookService} from '../../rbook.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private show: boolean;

  constructor(private recipe: RbookService) {
  }

  ngOnInit(): void {
    this.recipe.formatDiv.subscribe((shower)=> {
      //console.log(shower);
      this.show = shower;
    });
  }



}
