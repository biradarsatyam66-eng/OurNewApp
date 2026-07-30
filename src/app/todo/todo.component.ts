import { Component, OnInit } from '@angular/core';

interface Itodo{
  todoitem: string;
  todoid: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoArr : Itodo[] = [{
    todoitem : 'JS',
    todoid : '1' 
  },
  {
    todoitem : 'TS',
    todoid : '1' 
  },
  {
    todoitem : 'NODE.JS',
    todoid : '1' 
  }
];

todoarr : Itodo[] = [{
    todoitem : 'Angular',
    todoid : '1' 
  },
  {
    todoitem : 'CSS',
    todoid : '1' 
  },
  {
    todoitem : 'HTML',
    todoid : '1' 
  }
];


ontodoAdd(eve: HTMLInputElement){
  this.todoArr.unshift({
    todoitem : eve.value,
    todoid : Date.now().toString()
  })
  eve.value = ''
}

ontodoadd(eve : HTMLInputElement){
  this.todoarr.unshift({
    todoitem : eve.value,
    todoid : Date.now().toString()
  })
  eve.value = ''
}

ontodo(eve : HTMLInputElement){
  this.todoArr.unshift({
    todoitem: eve.value,
    todoid: Date.now().toString()
  })
  eve.value = ''
}

productcount = 0
productmsg = `NO PRODUCT IS ADDED CURRENTLY.`

onProductadd(){
  this.productcount++
  this.productmsg = `${this.productcount} PRODUCT IS ADDED CURRENTLY.`
}

onProductremove(){
  this.productcount--;
  this.productmsg = `${this.productcount} PRODUCT IS ADDED CURRENTLY.`
}

}
