import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-selectprovider',
  templateUrl: './selectprovider.component.html',
  styleUrls: ['./selectprovider.component.css']
})
export class SelectproviderComponent implements OnInit {

  href:String;
  sname:String;
  provider:any;
  price:any;
  constructor(private router :Router,private service:DataService) { }

  ngOnInit() 
  {
    this.href=this.router.url;
    this.sname=this.href.split("/")[2].replace("%20"," ");
    console.log(this.href.split("/")[2].replace("%20"," "));
    console.log(this.sname);
    this.price=this.href.split("/")[3];
    console.log(this.price);


    window.sessionStorage.setItem("servicename",""+this.sname);
    window.sessionStorage.setItem("price",this.price);
    

    let obresult=this.service.getProviderByServiceName(this.sname);
    obresult.subscribe((result)=>{
      console.log(result);
      this.provider=result;
      console.log(this.provider);
      
      
    })
    
    
  }

}
