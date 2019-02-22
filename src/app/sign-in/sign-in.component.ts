import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignInService } from "../sign-in.service"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private _SignInService:SignInService
  ) { }

  ngOnInit() {
  }
userModel=new User("",null,"",null);

onSubmit(){
this._SignInService.signIn(this.userModel).subscribe(
  data=>console.log('Success!', data),
  error=>console.error('Error!',error)
  
)
}
}
