import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { PostApartment } from './post-apartment'

@Injectable({
  providedIn: 'root'
})
export class PostApartmentService {

  constructor(private _http:HttpClient) { }

  _url='';
  enroll(postApartment: PostApartment){
    return this._http.post<any>(this._url,postApartment)
  }
}
