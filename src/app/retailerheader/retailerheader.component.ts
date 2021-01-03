import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-retailerheader',
  templateUrl: './retailerheader.component.html',
  styleUrls: ['./retailerheader.component.css']
})
export class RetailerheaderComponent implements OnInit {

  loginOrLogout: string;
  rId : string;
  constructor
  ( private _customerService : CustomerserviceService,
  private _router : Router) {
   
   }

  ngOnInit(): void {
    if((sessionStorage.getItem('retailerId'))!=null)
    {
      this.rId = (sessionStorage.getItem("retailerId"))!;
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

  logoutUser()
  {
    alert('Retailer Logged Out');
    sessionStorage.removeItem('retailerId');
    this.rId = "null";
    this.ngOnInit();
    this._router.navigate(['retailerhome']);
  }
  loginUser()
 {
 this._router.navigate(['/retailerSignIn']);
 }
}

