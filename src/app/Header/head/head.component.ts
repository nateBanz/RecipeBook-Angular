import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RbookService} from '../../rbook.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() choose:EventEmitter<any> = new EventEmitter<any>();

  constructor(private recipeService: RbookService ) { }

  onSaveData(){
    this.recipeService.storeRecipes();
  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes().subscribe();
  }

}
