import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';


@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {
_url='';

  constructor(private _http:HttpClient) { }

  enroll(profile:Profile){
    return this._http.post<any>(this._url,profile)
  }
}
