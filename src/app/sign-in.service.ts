import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _http:HttpClient) { }

  _url='';

  signIn(user:User){
    return this._http.post<any>(this._url,user);
  }
}
