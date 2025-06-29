import { Injectable } from '@angular/core';
import { UserRegistrationRequest } from '../models/UserRegistrationRequest';
import { UserRegistrationResponse } from '../models/UserRegistrationResponse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginRequest } from '../models/UserLoginRequest';
import { UserLoginResponse } from '../models/UserLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  basepath="http://localhost:8080"
  constructor(private http: HttpClient){
    
  }
  
  //User Login
  userlogin(user: UserLoginRequest): Observable<UserLoginResponse> {
    let url = this.basepath + "/login";

    let loginObject: UserLoginRequest = user;
    const requestOptions = {
      body : loginObject,
      withCredentials : true
    }
    return this.http.request('POST', url, requestOptions);
  }
  //User registration 
  registerUser(form_data: UserRegistrationRequest): Observable<UserRegistrationResponse> {
    let url = this.basepath + "/register";

    let registrationObject: UserRegistrationRequest = form_data;

    const requestOptions = {
      body : registrationObject
    }

    return this.http.request('POST', url, requestOptions);
  }
}

