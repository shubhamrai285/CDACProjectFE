import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private dataservice:DataService) { }
userid:any;
pid:any;
date:String;


  ngOnInit()
   {
     this.userid=this.router.url.split("/")[2];
     this.pid=this.router.url.split("/")[3];
     
     
  this.date=  window.sessionStorage.getItem("date");
console.log(this.userid)
console.log(this.pid);


;

  this.dataservice.insertintocustproviderdetails(this.userid,this.pid,this.date).subscribe((result)=>{

  });
  console.log("after dataservice");
  
  }


  
  
    

}
