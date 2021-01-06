import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpasword',
  templateUrl: './forgetpasword.component.html',
  styleUrls: ['./forgetpasword.component.css']
})
export class ForgetpaswordComponent implements OnInit {

  obj={
    "email":""
  };

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() 
  {

  }
  call()
  {
    console.log(this.obj);
    
   this.dataservice.getpassword(this.obj).subscribe((result)=>{
     alert("Password sent to your email")
    // window.open("www.gmail.com", "_blank");
     
    this.router.navigate(['login']);
     

   })
  }

}
