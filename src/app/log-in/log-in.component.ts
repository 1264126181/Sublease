import { Component, OnInit } from '@angular/core';
import { Login} from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _loginService:LoginService) { }

  ngOnInit() {
  }
loginModel=new Login("",null);

onSubmit(){
  this._loginService.login(this.loginModel).subscribe(
    data=>console.log("Success!",data),
    error=>console.error("Error!",error)
  )
}

}
