import { Component, OnInit } from '@angular/core';
import { PostApartment } from '../post-apartment';
import { HttpClient } from '@angular/common/http';
import { PostApartmentService } from '../post-apartment.service'

@Component({
  selector: 'app-post-apartment',
  templateUrl: './post-apartment.component.html',
  styleUrls: ['./post-apartment.component.css']
})
export class PostApartmentComponent implements OnInit {

  constructor(private http:HttpClient,private _enrollmentService:PostApartmentService) { }

  ngOnInit() {
  }

countrys=['united states','China','Canada','Spain','Europe']
types=['apartment','Single Family House',' Townhouse','other']
postApartment= new PostApartment("","","","",null,"",null,null,"","","",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null);

imageUrl:string="assets/40574338e3455ef.jpg";
fileUpload: File = null;
_url='';

handleFileInput(file: FileList){
  this.fileUpload=file.item(0);
  
  var reader= new FileReader();
  reader.onload=(event:any)=>{
    this.imageUrl=event.target.result;
  }
  reader.readAsDataURL(this.fileUpload);
  }
  



  onFileSelected(event){
    this.fileUpload=<File>event.target.files[0];
  }

  onUpload(){
    const fd=new FormData();
fd.append('image',this.fileUpload,this.fileUpload.name)
this.http.post(this._url,fd )
.subscribe(res=>{
  console.log(res);
}

);

}


onSubmit(){
  this._enrollmentService.enroll(this.postApartment)
                         .subscribe(
                           data=>console.log('Success!',data),
                          error=>console.error('Error!',error)
                         )
}








}
