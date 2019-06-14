import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exe4';
  FullName:string;
  DOB:string;
  EmailAddress:string;
  PhoneNumber:string;
  Password:string;
  TellMe:string;
  select:string;
  check:boolean=false;
  gender:string;
  
Fullname(event:any){
  this.FullName=event.target.value;
}
DOfB(event:any){
  this.DOB=event.target.value;
}
EmailAddres(event:any){
  this.EmailAddress=event.target.value;
}
PhonNumber(event:any){
  this.PhoneNumber=event.target.value;
}
Passwrd(event:any){
  this.Password=event.target.value;
}
Tell(event:any){
  this.TellMe=event.target.value;
}
selct(event:any){
  this.select=event.target.value;
}
button1(event:any){
  this.gender="male";
}
button(event:any){
  this.gender="female";
}
condtns(event:any){
  this.check=true;
}
register(event:any){
  if(this.FullName==""|| this.DOB=="" ||this.PhoneNumber==""||this.Password==""||this.TellMe==""||this.select==""||this.check==false||this.gender=="")
  {
    alert('All fields must be filled');
  }
  else
  alert('Registeration Completed');
}


}
