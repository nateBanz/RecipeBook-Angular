import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';
import {ShoppingService} from '../../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
 @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;



  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.editing
      .subscribe((index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name:  this.editItem.name,
          amount: this.editItem.amount
        })
      });
  }
  onAdd( form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    }
    else{
      this.shoppingService.addIng(newIngredient);
    }




  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
