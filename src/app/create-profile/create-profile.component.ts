import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { CreateProfileService } from '../create-profile.service'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {


  constructor(private __createProfileService:CreateProfileService) { }

  ngOnInit() {
  }
  profileModel=new Profile("","","","");

onSubmit(){
  this.__createProfileService.enroll(this.profileModel).subscribe(
    data=>console.log('Success!',data),
    error=>console.error('Error!',error)
  )
}



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
}



