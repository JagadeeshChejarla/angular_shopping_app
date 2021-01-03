import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerSignUp } from '../DTO/RetailerSignUp';

import { CustomerserviceService } from '../Service/customerservice.service';
import { RetailerserviceService } from '../Service/retailerservice.service';

@Component({
  selector: 'app-retailersignup',
  templateUrl: './retailersignup.component.html',
  styleUrls: ['./retailersignup.component.css']
})
export class RetailersignupComponent implements OnInit {

  retailerSignUp : RetailerSignUp;
  constructor(
    private _retailerService : RetailerserviceService,
    private _router : Router
  ) 
  {
    this.retailerSignUp = new RetailerSignUp();


  }

  ngOnInit(): void {
  
   
  }
  onRegisterClick() {
     this._retailerService.addNewRetailer(this.retailerSignUp).subscribe((data: any) => {
        if(data != null) {
            alert("Registration is successful");
            this._router.navigate(["retailerSignIn"]);
        }
        else{
          alert("registration not succesfull");
        }
    }, (err) => {
        alert("something went wrong");
        console.log(err);
    })
}


}

