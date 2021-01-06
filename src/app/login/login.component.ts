import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  user ={
    "Mobile": "", 
    "Password":""
  }
  obj: any;
  constructor(private service: AuthService, private router: Router) 
  {

  }

  ngOnInit() 
  {
  }

  SignIn(loginForm)
  {
    console.log(this.user);
    
    let loginCredentials = loginForm.form.value;
    console.log("form data"+loginCredentials);

   // let isUserValid= this.service.CheckCredentialsWithDB(loginCredentials);
   let isUserValid =this.service.SelectByMobileAndPassword(this.user) 
   isUserValid.subscribe((result)=>{
     console.log(result);
     
  this.obj=result;
    console.log(this.obj);
    if(this.obj != null)
    {
      console.log(this.obj);
      if(this.obj.fname =="rahul" && this.obj.password =="admin")
      {
        window.sessionStorage.setItem("isActive", "1");
        window.sessionStorage.setItem("userdetails",""+this.obj.id);
        if(this.service.IsAdminLoggedIn())
        this.router.navigate(['/home']); 
     
      }
      else 
      {
        window.sessionStorage.setItem("isActive", "2");
        window.sessionStorage.setItem("userdetails",this.obj.id);
       
        if(this.service.IsLoggedIn())
      this.router.navigate(['/home']); 
      }
    }
    else{
      this.message = "Mobile / Password is Invalid!";
    } 
   })
   
    
    
  }
}

 



