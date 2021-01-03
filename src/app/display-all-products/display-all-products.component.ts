import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../DTO/Product';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {
  products : Product [];

  constructor
  (private _customerService : CustomerserviceService,
  private  _route : ActivatedRoute,
  private _router : Router) { }


  ngOnInit(): void
  {
    let uId:string= sessionStorage.getItem('userId')!;
    if(uId==null){
      alert("Need to login");
      this._router.navigate(["home"]);
    }
   this._customerService.getAllProducts().subscribe((data: Product [])=>{
     this.products = data;
 console.log(this.products);
   }
   );
  }
  displ(img : string): void{
    alert(img);
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
  addToWishlist(proId:number){
    sessionStorage.setItem("proId",proId.toString());
    let uId:string= sessionStorage.getItem('userId')!;
if (uId != "null")
{
    this._customerService.addToMyWishlist(uId,proId.toString()).subscribe((data: any)=>{

      alert(data);
    

    });
}
   
 }
}
