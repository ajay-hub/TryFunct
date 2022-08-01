import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserLogin } from '../user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginUserServiceService {

  private baseURL="http://localhost:8051/user-api/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:UserLogin):Observable<object>{
    return this.httpClient.post(this.baseURL,user);
  }
}
