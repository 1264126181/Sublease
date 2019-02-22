import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http:HttpClient) { }
  _url='';
  login(login:Login){
    return this._http.post<any>(this._url,login);
  }
}
