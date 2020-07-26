import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//so that we know the type of data response
interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
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
    );
  }
}
