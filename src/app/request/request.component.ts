import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request:any;

  constructor(private dataservice :DataService) { }

  ngOnInit() 
  {
 let  pid= window.sessionStorage.getItem("provider")
     this.dataservice.getrequests(pid).subscribe((result)=>{
       console.log(result);
       this.request=result;
       console.log(this.request);
     })
    
  }

}
