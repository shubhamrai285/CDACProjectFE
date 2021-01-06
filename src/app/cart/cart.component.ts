import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private dataservice:DataService) { }
href:String
provider:any
price:any
servicename:any
userid:any
date :any;
  ngOnInit() 
  {
    this.href=this.router.url;
    console.log(this.href);
     let obresult= this.dataservice.getproviderbyid(this.href);
     obresult.subscribe((result)=>{
       console.log(result);
       this.provider=result;
       console.log(this.provider);
       this.price=window.sessionStorage.getItem("price");
       console.log(this.price);
       this.servicename=window.sessionStorage.getItem("servicename")
       console.log(this.servicename);
       this.userid=window.sessionStorage.getItem("userdetails")
       console.log(this.userid);
   
     })  
  }

  onSearchChange(){  
   
    window.sessionStorage.setItem("date",this.date);
  }






  
    

  

}
