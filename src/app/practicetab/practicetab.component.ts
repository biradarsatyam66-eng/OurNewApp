import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Istd {
  fname : string,
  lname : string,
  email : string,
  contact : number,
  stdId : string,
}

@Component({
  selector: 'app-practicetab',
  templateUrl: './practicetab.component.html',
  styleUrls: ['./practicetab.component.scss'],
})
export class PracticetabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   skillsArr = [
//   {
//     tabHeading: 'angular',
//     tabContent: `<strong>Angular</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   },
//   {
//     tabHeading: 'node',
//     tabContent: `<strong>Node</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   },
//   {
//     tabHeading: 'express',
//     tabContent: `<strong>Express</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   },
//   {
//     tabHeading: 'javascript',
//     tabContent: `<strong>JavaScript</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   },
//   {
//     tabHeading: 'typescript',
//     tabContent: `<strong>TypeScript</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   },
//   {
//     tabHeading: 'bootstrap',
//     tabContent: `<strong>Bootstrap</strong> Lorem ipsum dolor sit amet, 
//     quia eius dignissimos expedita ratione eligendi blanditiis doloribus.`
//   }
// ];

// selectedSkill:string = 'angular'

// onTab(e : string){
//   this.selectedSkill = e
// }

@ViewChild('fname') fname !: ElementRef
@ViewChild('lname') lname !: ElementRef
@ViewChild('email') email !: ElementRef
@ViewChild('contact') contact !: ElementRef


editStd !: Istd

isinEditMode : boolean = false

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

  onAddstd(){
     let obj : Istd = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      contact : +this.contact.nativeElement.value,
      email : this.email.nativeElement.value,
      stdId : Date.now().toString()
     }

     this.StdArr.unshift(obj)
     this.fname.nativeElement.value = ''
     this.lname.nativeElement.value = ''
     this.contact.nativeElement.value = ''
     this.email.nativeElement.value = ''
  }


  onedit(s : Istd){
    this.editStd = s

    this.fname.nativeElement.value =s.fname
    this.lname.nativeElement.value = s.lname
    this.contact.nativeElement.value = s.contact
    this.email.nativeElement.value = s.email

    this.isinEditMode = true
  }

  onUpdateStd(){
    let update_id = this.editStd.stdId

    let update_obj : Istd = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      contact : +this.contact.nativeElement.value,
      email : this.email.nativeElement.value,
      stdId : update_id
    }

    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.email.nativeElement.value = ''

    let getindex = this.StdArr.findIndex(i => i.stdId === update_id)
    this.StdArr[getindex] = update_obj

    this.isinEditMode = false
  }

  ondelete(s : string){
    let getindex = this.StdArr.findIndex(i=>i.stdId === s)
    this.StdArr.splice(getindex,1)
  }

}
