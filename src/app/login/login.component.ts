import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../DTO/Login';
import { CustomerserviceService } from '../Service/customerservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;

  constructor
  ( private _customerService : CustomerserviceService,
  private _router : Router) {
    this.login = new Login();
   }

ngOnInit(): void {
  
}

userLoginClick(){
  this._customerService.login(this.login)
  .subscribe((data) => {
    console.log(data)
    if(data > 0) {
      alert(data);
      sessionStorage.setItem("userId",data.toString())
        this._router.navigate(["home"]);
    }
    else{
      alert("invalid credentials");
    }
}, (err) => {
    alert("something went wrong");
    console.log(err);
})
}
}