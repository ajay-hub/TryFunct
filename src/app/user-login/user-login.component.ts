import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../user-login';
import { LoginUserServiceService } from '../Services/login-user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:UserLogin = new UserLogin();
  constructor(private loginuserservice: LoginUserServiceService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successful!");
    },error=>alert("Failed!"))
  }
}
