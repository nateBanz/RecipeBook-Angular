import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  constructor() { }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  submitForm(form: NgForm){
    console.log(form.value);
    form.reset();
  }
  ngOnInit(): void {
  }

}
