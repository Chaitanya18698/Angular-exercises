import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercise 1';
  amount:number=200;
  isDisabled:string="";


handleIncrementClick(event:any)
{
  this.amount=this.amount+10;
}
handleDecrementClick(event:any){
  if(this.amount==10)
  this.isDisabled="disabled"
  this.amount=this.amount-10;
}

}

