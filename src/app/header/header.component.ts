import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword:string;
  loginOrLogout: string;
  cQty: number;
  uId : string;

  constructor
  ( private _customerService : CustomerserviceService,
  private _router : Router) {
   
   }

   ngOnInit(): void {
    if((sessionStorage.getItem('userId'))!=null)
    {
      this.uId = (sessionStorage.getItem("userId"))!;
      this.loginOrLogout = 'Logout';
      // this._customerService.getMyCart(sessionStorage.getItem('user'))
      // .subscribe((data:Cart[])=>{
      //   this.cQty = data.length;
      //})
    }
    else
    {
      this.loginOrLogout = 'Login';
    }
  }
  onSearch(){
 
    console.log(this.keyword)
    sessionStorage.setItem("searchProducts",this.keyword)
    this._router.navigate(["searchProduct"]);
  }
  logoutUser()
  {
    alert('User Logged Out');
    sessionStorage.removeItem('userId');
    this.cQty = 0;
    this.uId = "null";
    this.ngOnInit();
    this._router.navigate(['home']);
  }
  loginUser()
 {
 this._router.navigate(['/user-login']);
 }
}
