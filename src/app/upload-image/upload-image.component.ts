import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

