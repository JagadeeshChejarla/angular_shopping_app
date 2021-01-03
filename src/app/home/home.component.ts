import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../DTO/Product';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product [];
  keyword: string;

  constructor
  (private _customerService : CustomerserviceService,
  private  _route : ActivatedRoute,
  private _router : Router) { }

  ngOnInit(): void {
    
   
  }
  onSearch(){
 
    console.log(this.keyword)
    sessionStorage.setItem("searchProducts",this.keyword)
    this._router.navigate(["searchProduct"]);
  }

  

}
