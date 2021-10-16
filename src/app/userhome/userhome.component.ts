import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  ind=0
  event=""
  note=""
  date=""
  reminders:any[]=[]
  user:any
  oldevent=""
  //id:any
 id=""
  constructor(private ds:DataService, private http:HttpClient) { 
  //   this.user=JSON.parse(localStorage.getItem("currUser") || '')
   //this.reminders= this.ds.addReminder(this.user)
  this.user=localStorage.getItem("currentUser")
  // this.ds.viewReminder(this.user)
  // .subscribe((result:any)=>{
  //   if(result){
  //     this.reminders=result.reminders
  //     console.log(this.reminders)
  //   }
  // },
  // (result:any)=>{
  //   alert(result.error.message)
  // })
  }

  ngOnInit(): void {
  }




  addReminder(){
    //var id= this.id
    var event=this.event
    var note=this.note
    var name=this.user
    var date=this.date
    this.ds.addReminder(name,event,note,date)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    // this.reminders.push({
    //   id:this.reminders.length,
    //   Event:event,
    //   Note:note
    //   //Date:date
    // })
    console.log(this.reminders);   
  }

viewReminder(){
  
  this.user=localStorage.getItem("currentUser")
  var name=this.user
  
  this.ds.viewReminder(name)
  .subscribe((result:any)=>{
    if(result){
      this.reminders=result.reminders
      console.log(this.reminders)
    }
  },
  (result:any)=>{
    alert(result.error.message)
  })
}

  
remove(index:any){
  //this.reminders.splice(id,1)
 // var id=this.i
 // console.log(i.value);
 let  id=this.reminders[index].Id
  this.ds.remove(id).subscribe((result:any)=>{
if(result){
  alert(result.message)
 // this.viewReminder()
}
  })
}
updateEvent(){
  
  let event=this.event
  console.log(event);
 
    let note=this.note

    let date=this.date
   let  id=this.reminders[this.ind].Id
    this.ds.edit(id,event,note,date)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
}
// update(){
// index=this.index
//  console.log(index);
 
// }
edit(id:any){
 // var id= this.id
 this.ind=id

}

}
