import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../DTO/Login';
import { RetailerserviceService } from '../Service/retailerservice.service';

@Component({
  selector: 'app-reatailersignin',
  templateUrl: './reatailersignin.component.html',
  styleUrls: ['./reatailersignin.component.css']
})
export class ReatailersigninComponent implements OnInit {

  login:Login;

  constructor
  ( private _retailerService : RetailerserviceService,
  private _router : Router) {
    this.login = new Login();
   }

ngOnInit(): void {
  
}

userLoginClick(){
  this._retailerService.retailerLogin(this.login)
  .subscribe((data) => {
    console.log(data)
    if(data > 0) {
      alert(data);
      sessionStorage.setItem("retailerId",data.toString())
        this._router.navigate(["retailerhome"]);
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
