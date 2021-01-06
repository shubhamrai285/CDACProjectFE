import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  service={
    "category":"",
    "name":"",
    "price":""
  }
image:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() 
  {
  }


  onSelectFile(event)
   {
    this.image = event.target.files[0];
  }

addservice()
{
console.log(this.service);
console.log(this.image);

  this.dataservice.insertservice(this.service,this.image).subscribe((result)=>{
    
  })

}


  
}
