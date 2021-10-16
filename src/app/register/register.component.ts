import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name=""
  pwd=""

  constructor( private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var name=this.name
    var pwd=this.pwd
    this.ds.register(name,pwd)
   .subscribe((result:any)=>{
    if (result)
    {
      alert(result.message)
      console.log(result);
      
      this.router.navigateByUrl("")
    }
  },
    (result)=>{
      alert(result.error.message)
    
   })
  
  }

}
