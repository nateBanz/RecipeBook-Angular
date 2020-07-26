import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService) { }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  submitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
    //...
    } else {
      //uses the method in the service to send sign up captured from the form into the database. Logs the data sent and error messages
      this.authService.signUp(email, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.error = "An error occured!";
          this.isLoading = false;
        }
      );
      //resets the form afterwards
      form.reset();
    }
  }


}
