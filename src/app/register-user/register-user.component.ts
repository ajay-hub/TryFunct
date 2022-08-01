import { Component, OnInit } from '@angular/core';
import { AdminReg } from '../admin-reg';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  adminReg:AdminReg = new AdminReg();
  
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  adminRegister(){
    console.log(this.adminReg);
    this.registerService.registerAdmin(this.adminReg).subscribe(data=>{
      alert("Registration successful!");
    },error=>alert(""));
  }
}
