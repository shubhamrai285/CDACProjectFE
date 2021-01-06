import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-register',
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.css']
})
export class ProviderRegisterComponent implements OnInit {

  constructor(private service: DataService, 
    private router: Router) { }


    message = "";
    // register={
    // "fname":"",
    // "lname":"",
    // "mobile":"",
    // "password":"",
    // "address":{
    //   "pincode":"",
    //   "city":"",
    //   "locality":"",
    //   "state":""
    // },
    // "pservice":{
    //   "sname":""
    // }
    // }
    register:any;
    image:any;


    obj:any;
 
  ngOnInit() {
  }


  onSelectFile(event) {
    this.image = event.target.files[0];
}

  OnAddCallMe(formdata)
  {
    console.log(formdata.form.value);
    this.register=formdata.form.value;
    console.log(this.register);

    let observableResult=
        this.service.InsertIntoProvider(
          this.register,this.image);

    observableResult.subscribe((result)=>{
       console.log("after subscribe");
      
      
     this.obj=result
      if(this.obj == null)
       {
        console.log("Successful");
        alert("Registration Successful");
        
     }
       else
       {
         console.log("fail");
        
       }
      
     });

  }


  GoBackHome()
  {
    this.router.navigate(['/home']);
  }

}
