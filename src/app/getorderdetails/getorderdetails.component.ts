import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceOrder } from '../DTO/PlaceOrder';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-getorderdetails',
  templateUrl: './getorderdetails.component.html',
  styleUrls: ['./getorderdetails.component.css']
})
export class GetorderdetailsComponent implements OnInit {
myOrders : PlaceOrder [];
  constructor
  ( private _customerService : CustomerserviceService,
  private _router : Router) {
   
   }

  ngOnInit(): void {
    let uId:string= sessionStorage.getItem('userId')!;
    if(uId == null){
      alert("Need to login");
      this._router.navigate(["home"]);
    }
   this._customerService.getMyOrderDetails(uId).subscribe((data: any)=>{
     console.log(data);
     this.myOrders=data;
     if(data==null){
       alert("No order detaile available")
       this._router.navigate(["home"]);
     }
   })

  }

}
