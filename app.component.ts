import { Component } from '@angular/core';
import { item } from './app.interface';
import { citem } from './app.interface';
// import { privateEncrypt } from 'crypto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exe6';
  amount:number=0;
  items:item[]=[
    {
  
      Iname:'item1',
      price:200,
      amount:0
    },
    {
  
      Iname:'item2',
      price:300,
      amount:0
    },
    {
  
      Iname:'item3',
      price:400,
      amount:0
    }
  ]
  citems:citem[]=[

  ]
addcart(id:any)
{
    this.citems.push(this.items[id]);
    
    this.amount=this.amount+this.items[id].price;
}
remove(item:any,n:number)
{
  console.log(item);
  item.price
  this.citems.splice(n,1);
  // if(this.citems.length==0)
  // {
  //     this.amount=0;
  // }
  // else
  this.amount=this.amount-item.price;
}


}
