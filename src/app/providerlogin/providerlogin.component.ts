import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providerlogin',
  templateUrl: './providerlogin.component.html',
  styleUrls: ['./providerlogin.component.css']
})
export class ProviderloginComponent implements OnInit {
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
    console.log(loginCredentials);

   // let isUserValid= this.service.CheckCredentialsWithDB(loginCredentials);
   let isUserValid =this.service.SelectByMobileAndPasswordForProvider(this.user)
   isUserValid.subscribe((result)=>{
     console.log(result);
     
  this.obj=result;
    console.log(this.obj);
    if(this.obj != null)
    {
      console.log(this.obj);
    
        window.sessionStorage.setItem("isActive", "3");
        window.sessionStorage.setItem("provider",this.obj.id)
        if(this.service.IsProviderLoggedIn())
      this.router.navigate(['/home']); 
    
    }
    else{
      this.message = "Mobile / Password is Invalid!";
    } 
   })
   
    
    
  }
}
