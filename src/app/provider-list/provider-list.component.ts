import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private service :DataService) { }
  provider: any;
  ngOnInit()
   {
     
      let observableResult=  this.service.GetAllProvider();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.provider = result;
   });
   
   }




}
