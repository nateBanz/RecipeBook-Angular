import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';
//so that we know the type of data response
export interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user  = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router ) { }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2X7FDFChAOZ00JJnbZVsXrs2wRhuRtto',{
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError),tap(resData=>{
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }
    ));



  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2X7FDFChAOZ00JJnbZVsXrs2wRhuRtto',{
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError),tap(resData=>{
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }
    ));
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private handleError(errorRes: HttpErrorResponse ){
    let error = 'Unknown error found!';
    if(!errorRes.error||!errorRes.error.error){
      return throwError(error);
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        error = 'The email already exists';
        break;
      case ('EMAIL_NOT_FOUND'):
        error = 'Email not found, try again';
        break;
      case('INVALID_PASSWORD'):
        error = 'Password is not correct. Try again.';
        break;
    }
    return throwError(error);
  }

  private handleAuth(email: string, userId:string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + +expiresIn *1000);
    const user = new User(email, userId,token, expirationDate );
    this.user.next(user);
    //set the user in local storage
    localStorage.setItem('userData' , JSON.stringify(user));
  }

  autoLogin(){
    const userData:{email: string;
    id: string;
    _token: string;
    _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loaded = new User
    (userData.id,
      userData.email,
      userData._token,
      new Date(userData._tokenExpirationDate));

    if(loaded.token){
      this.user.next(loaded);
    }
  }

}

