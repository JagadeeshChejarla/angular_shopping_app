import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wishlist } from '../DTO/wishlist';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist:Wishlist [];
  constructor(
    private _customerService : CustomerserviceService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    let uId:string= sessionStorage.getItem('userId')!;
    console.log(uId)
    if(uId==null){
      alert("Need to login");
      this._router.navigate(["home"]);
    }
    this._customerService.getMyWishlist(uId).subscribe((data:any)=>{
      console.log(data);
      if(data!==null){
      this.wishlist = data;
      }
      else{
        alert("No carts available");
      }
    })
  }
  addToCart(proId:number){
    sessionStorage.setItem("proId",proId.toString());
    let uId:string= sessionStorage.getItem('userId')!;
  if (uId != "null")
  {
    this._customerService.addToCart(uId,proId.toString()).subscribe((data: any)=>{
  
      alert(data);
  
  
    });
  }
   
  }

}
