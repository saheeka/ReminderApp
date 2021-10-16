import { HttpClient } from '@angular/common/http';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currUser=""
  user:any={
    "ammu": {name:"ammu",password:"ammu",reminders:[]},
     "abhi":{name:"abhi",password:"abhi",reminders:[]}
 
   }
  name: any;

  constructor(private http:HttpClient) { }

  // saveDetails(){
  //   if(this.currUser){
  //     localStorage.setItem("currUser",JSON.stringify(this.currUser))
  //   }
  // }

  register(name:any,password:any){
    const data={
      name,
      password
    }
   return  this.http.post("http://localhost:3000/register", data)
// let userDetails=this.user
// if(name in userDetails )
// {
//   return false
// }
// else{
//   userDetails[name]={
//     name,
//     password,

//   }
//   return true
// }
  }


 login(name:any,password:any){
  const data={
    name,
    password
  }
 return  this.http.post("http://localhost:3000/login", data)
// let userDetails=this.user
  // let userDetails=this.user
  // if(name in userDetails)
  //   {
  //     if(password == userDetails[name]["password"]){
  //       this.currUser=name
  //       return true
        
  //     }
  //     else{
  //       alert("invalid password")
  //       return false
  //     }
  //   }
  //   else{
  //     alert("invalid user")
  //     return false
  //   }
  
 } 


 addReminder(name:any,event:any,note:any,date:any){
  const data={
    
    name ,
    
    event,
    note,
    date
  }
 return  this.http.post("http://localhost:3000/addReminder", data)
 }
 viewReminder(name:any){
   const data={
     name
   }
   return  this.http.post("http://localhost:3000/viewReminder", data)
 }
 remove(id:any){
   const data={
     id
   }
   return  this.http.post("http://localhost:3000/remove", data)
  }
  edit(id:any,event:any,note:any,date:any){
    const data={
    
      id,
      event,
      note,
      date
    }
   return  this.http.post("http://localhost:3000/edit", data)
  }
 
}
