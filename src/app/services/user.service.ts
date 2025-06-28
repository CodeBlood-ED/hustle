import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8080"
  constructor(){

  }

  userlogin(user: User) {
    let path = this.url + "/login";
    
  }
}

