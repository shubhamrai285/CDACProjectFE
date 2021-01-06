import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private service :DataService) { }
  customer: any;


  ngOnInit()
   {
          
    let observableResult=  this.service.GetAllCustomers();
    observableResult.subscribe((result)=>
    {
    console.log(result);
    this.customer = result;
    });
    
}

}
