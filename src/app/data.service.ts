import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  getpassword(email: any) 
  {
    
    console.log();
    
    return this.helper.post("http://localhost:8080/getpassword",email);
  }
  

  constructor(private helper: HttpClient) 
  {
    console.log("Data Service Object Created");
  }


  getrequests(pid)
  {
    return this.helper.get("http://localhost:8080/allCustsDate/"+pid);
    
  }

 

  insertintocustproviderdetails(uid,pid,date)
  {
    
    console.log("http://localhost:8080/getall/",uid+"/"+pid+"/"+date);
    console.log(date);
    
  
   return  this.helper.get("http://localhost:8080/getall/"+uid+"/"+pid+"/"+date);
  }

  getproviderbyid(data)
  {
    return this.helper.get("http://localhost:8080"+data)
  }
  getProviderByServiceName(sname)
  {
    return this.helper.get("http://localhost:8080/subServices/"+sname);
  }
  GetSubServiceByName(sname)
   {
   return this.helper.get("http://localhost:8080/"+sname); 
  }
  
  //constructor(private helper: HttpClient) 
 
  GetAllCustomers()
  {
    return  this.helper.get("http://localhost:8080/custs");
  }
  GetAllProvider()
  {
    return  this.helper.get("http://localhost:8080/providers");

  }

  GetServiceName()
  {
    return this.helper.get("http://localhost:8080/services");
  }

  SelectByNo(No)
  {
    return  this.helper.get("http://localhost:8080/emps/" + No );
  }

  SelectByMobileAndPassword( data)
  {
    console.log(data);
    
    return  this.helper.get("http://localhost:8080/login/" +data.Mobile +"/"+data.Password);
  }
  

  InsertIntoCustomer(userObj)
  {
    console.log(userObj);
    
  return  this.helper.post("http://localhost:8080/cust",userObj);
  }

  
  InsertIntoProvider(userObj,image)
  {
    console.log(userObj);
    console.log(image);
    const formData=new FormData();
    formData.append("fname",userObj.FName);
    formData.append("lname",userObj.LName);
    formData.append("mobile",userObj.Mobile);
    formData.append("email",userObj.Email);
    formData.append("password",userObj.Password);
    formData.append("pincode",userObj.PinCode);
    formData.append("city",userObj.City);
    formData.append("locality",userObj.Locality);
    formData.append("state",userObj.State);
    formData.append("servicename",userObj.servicename);
    formData.append("image",image);

    
  return  this.helper.post("http://localhost:8080/provider",formData);
  }

  insertservice(service,image)
  {
    console.log(service);
    console.log(image);
    const formData=new FormData();
    formData.append("category",service.category);
    formData.append("name",service.name);
    formData.append("price",service.price);
    formData.append("image",image);

    
  return  this.helper.post("http://localhost:8080/addservice",formData);
  }

  Update(empObj)
  {
   return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }

  Delete(No)
  {
    return  this.helper.delete("http://localhost:9898/emps/" + No );
  }

  //For UT Check
  Add(x, y)
  {
    return x+y;
  }

}




