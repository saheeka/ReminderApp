import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name=""
pwd=""

 
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
  login(){
    
    var name=this.name
    var pwd=this.pwd
     this.ds.login(name,pwd)
     .subscribe((result:any)=>{
      if(result){
        localStorage.setItem("currentUser",result.currentUser)
        alert(result.message)
          this.router.navigateByUrl("userhome")
      }
  
     },
     (result)=>{
       alert(result.error.message)
     }
     )
    
  }

}
