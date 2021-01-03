import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../DTO/Cart';
import { PlaceOrder } from '../DTO/PlaceOrder';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts : Cart [];
carts1 : Cart [] ;

add:string = "1";
minus:string ="-1";
myCarts: PlaceOrder [];
pType: string = "phone pay";
  constructor
  (private _customerService : CustomerserviceService,
  private  _route : ActivatedRoute,
  private _router : Router) { 
  this.carts1= this.carts;
  }

  ngOnInit(): void {
    let uId:string= sessionStorage.getItem('userId')!;
    console.log(uId)
    if(uId == null){
      alert("Need to login")
      this._router.navigate(["home"]);
    }
    this._customerService.getMyCarts(uId).subscribe((data:any)=>{
      console.log(data);
      if(data!==null){
      this.carts = data;
      }
      else{
        alert("No carts available");
      }
    })
  }
  deleteCart(cId:number){
    this._customerService.deleteCart(cId.toString()).subscribe((data: any)=>{
      console.log(data);
      alert(data);
      this._router.navigate(["viewcart"]);
    })

  }
  addProductTocart(cId:number){
    this._customerService.updateCart(cId.toString(),this.add).subscribe((data:any)=>{
      console.log(data);
      alert(data);
    })

  }
  deleteProductFromcart(cId:number){
    this._customerService.updateCart(cId.toString(),this.minus).subscribe((data:any)=>{
      console.log(data);
      alert(data);
    })

  }
  placeOrder(){

    this._customerService.placeOrder(this.carts,this.pType).subscribe((data:any)=>{
      console.log(data);
      alert(data);
      if(data!=null){
alert("placed scuccessfully");
      }
    })
  }

}
