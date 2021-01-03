import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../DTO/UserSignUp';
import { CustomerserviceService } from '../Service/customerservice.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  userSignUp : UserSignUp;
  constructor(
    private _customerService : CustomerserviceService,
    private _router : Router
  ) 
  {
    this.userSignUp = new UserSignUp();


  }

  ngOnInit(): void {
  
   
  }
  onRegisterClick() {
    this._customerService.ddNewUser(this.userSignUp).subscribe((data: UserSignUp) => {
        if(data != null) {
            alert("Registration is successful");
            this._router.navigate(["user-login"]);
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
