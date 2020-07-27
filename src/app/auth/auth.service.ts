import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
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

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2X7FDFChAOZ00JJnbZVsXrs2wRhuRtto',{
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(errorRes =>{
      let error = 'Unknown error found!';
      if(!errorRes.error||!errorRes.error.error){
        return throwError(error);
      }
      switch (errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          error = 'The email already exists';
      }
      return throwError(error);
    }))
      ;
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2X7FDFChAOZ00JJnbZVsXrs2wRhuRtto',{
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
