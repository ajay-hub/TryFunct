import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { AdminReg } from './admin-reg';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  baseURL:string="http://localhost:8051/admin-api/add";
  constructor(private httpClient: HttpClient ) {}

  registerAdmin(adminData:AdminReg){
    console.log(adminData);
    return this.httpClient.post(this.baseURL,adminData);
  }
}
