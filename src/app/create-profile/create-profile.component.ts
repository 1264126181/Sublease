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

}
