import {Component, EventEmitter, OnInit, OnDestroy, Output} from '@angular/core';
import {RbookService} from '../../rbook.service';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, OnDestroy{
  @Output() choose:EventEmitter<any> = new EventEmitter<any>();
  private userSub: Subscription;
  private isAuth = false;
  constructor(private recipeService: RbookService, private auth: AuthService ) { }
  ngOnInit(){
    this.userSub = this.auth.user.subscribe( user=>{
      //true when a user exists, false when it doesnt exist
      this.isAuth = !!user;
      }
    )
  }

  onSaveData(){
    this.recipeService.storeRecipes();
  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes().subscribe();
  }

  logout(){
    this.auth.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
