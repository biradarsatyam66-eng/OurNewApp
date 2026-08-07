import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Istd {
  fname : string,
  lname : string,
  email : string,
  contact : number,
  stdId : string,
}

@Component({
  selector: 'app-std-twoway',
  templateUrl: './std-twoway.component.html',
  styleUrls: ['./std-twoway.component.scss'],
})
export class StdTwowayComponent implements OnInit {

  fname !: string
  lname !: string
  email !: string
  contact !: number
  isinEditMode : boolean = false
  editStd !: Istd

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
  this._snackBar.open(message, 'Close', {
    duration: 3000,
    horizontalPosition: 'left',
    verticalPosition: 'top'
  });
}
  
  ngOnInit(): void {
  }

  StdArr : Array<Istd> = [{
    fname : "Satyam",
    lname : "Biradar",
    email : "biradarsatyam66@gmail.com",
    contact : 9011813971,
    stdId : '234',
  },
  {
    fname : "Shubham",
    lname : "Biradar",
    email : "shub66@gmail.com",
    contact : 7890678901,
    stdId : '239',
  },
  {
  fname: "Rahul",
  lname: "Sharma",
  email: "rahul.sharma@gmail.com",
  contact: 9876543210,
  stdId: "235",
},
{
  fname: "Priya",
  lname: "Patil",
  email: "priya.patil@gmail.com",
  contact: 9123456780,
  stdId: "236",
},
{
  fname: "Amit",
  lname: "Verma",
  email: "amit.verma@gmail.com",
  contact: 9988776655,
  stdId: "237",
},
{
  fname: "Sneha",
  lname: "Kulkarni",
  email: "sneha.kulkarni@gmail.com",
  contact: 9090909090,
  stdId: "238",
},
]

onAdd(){
  let new_obj  = {
    fname : this.fname,
    lname : this.lname,
    email : this.email,
    contact : this.contact ,
    stdId : Date.now().toString()
  }
  if(!this.fname || !this.lname || !this.email || !this.contact){
   return this.openSnackBar('ALL INPUTS ARE MANDATORY');
  }

  this.fname = ''
  this.lname = ''
  this.email = ''
  this.contact = +''
  this.StdArr.unshift(new_obj)
  this.openSnackBar('Student added successfully');
}

onedit(s : Istd){
  this.editStd = s
  this.fname = s.fname
  this.lname = s.lname
  this.contact = s.contact
  this.email = s.email
  this.isinEditMode = true
}

onupdate(){
  let update_id = this.editStd.stdId

  let update_obj : Istd = {
    fname : this.fname,
    lname : this.lname,
    email : this.email,
    contact : this.contact ,
    stdId : update_id
  }

  if(!this.fname || !this.lname || !this.email || !this.contact){
   return this.openSnackBar('ALL INPUTS ARE MANDATORY');
  }

  this.fname = ''
  this.lname = ''
  this.email = ''
  this.contact = +''

  let getIndex = this.StdArr.findIndex(i=> i.stdId === update_id)
  this.StdArr[getIndex] = update_obj
  this.openSnackBar('Student updated successfully');
  this.isinEditMode = false
}

ondelete(s : string){
  let getindex = this.StdArr.findIndex(i=> i.stdId === s)
  this.StdArr.splice(getindex,1)
  this.openSnackBar('Student deleted successfully');
}

}
