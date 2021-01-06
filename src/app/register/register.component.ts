import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: DataService, 
              private router: Router) { }

  message = "";
  register={
  "fname":"",
  "lname":"",
  "mobile":"",
  "email":"",
  "password":"",
  "address":{
    "pincode":"",
    "city":"",
    "locality":"",
    "state":""
  }
  }

  obj:any;
  ngOnInit() {
  }

  CheckValidation()
  {
console.log("in check validation");
console.log(this.register.mobile.length != 10);
let a=this.register.mobile.match(/(7|8|9)\d{9}/);
let b=parseInt(this.register.mobile);
let pin=parseInt(this.register.address.pincode)
let fname=this.register.fname.match(/[a-zA-Z]/)
console.log(a);
console.log(b);
console.log(fname);




  if(this.register.mobile.length != 10 || a == null|| b ==NaN  )
  {
    alert("Mobile Number is invalid")
    return false;

  }
  else if(pin ==NaN ||  this.register.address.pincode.length !=6)
  {
    alert("Pin code is invalid")
    return false
  }
  else if(this.register.password.length <5 )
  {
    alert("password length is small")
    return false
  }
  else if(fname == null )
  {
    alert("Invalid first name")
    return false
  }

  else
  return true;
  
  }

  OnAddCallMe(entireData)
  {
    let empObj = entireData.form.value;
    console.log(this.register);
    if(this.CheckValidation())
    {
    
    
    console.log(empObj);

    let observableResult=
        this.service.InsertIntoCustomer(this.register);

    observableResult.subscribe((result)=>{
      console.log("after subscribe");
      
     
    this.obj=result
      if(this.obj == null)
      {
        alert("Registration Successful");
        console.log("Successful");
        
      }
      else
      {
        console.log("fail");
        
      }
    
    });
  }

  }
  GoBackHome()
  {
    this.router.navigate(['/home']);
  }

}




