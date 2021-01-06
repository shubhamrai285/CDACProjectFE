import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
    
})
export class HomeComponent implements OnInit {

  servicename: any;
  subservicename:any;
  subservicename1:any;
  subservicename2:any;
  subservicename3:any;
  data:any;
  constructor(private service: DataService, private router:Router) 
  {
    console.log("Home Component Created");
  }
  
  ngOnInit() {
       let observableResult=  this.service.GetServiceName();
       observableResult.subscribe((result)=>{
     console.log(result);
     this.servicename = result;

     console.log(result[0].sname);
     
        let obresult=this.service.GetSubServiceByName(result[0].sname);
        obresult.subscribe((result)=>{
          console.log(result);
          this.subservicename=result;
        })
        let obresult1=this.service.GetSubServiceByName(result[1].sname);
        obresult1.subscribe((result)=>{
          console.log(result);
          this.subservicename1=result;
        })
        let obresult2=this.service.GetSubServiceByName(result[2].sname);
        obresult2.subscribe((result)=>{
          console.log(result);
          this.subservicename2=result;
        })
        let obresult3=this.service.GetSubServiceByName(result[3].sname);
        obresult3.subscribe((result)=>{
          console.log(result);
          this.subservicename3=result;
        })
       
    });
  }

  GoToRegister()
  {
    this.router.navigate(['/register']);
  }
  
  ngOnDestroy()
  {
    console.log("Home component destroyed..");
  }
 

}









