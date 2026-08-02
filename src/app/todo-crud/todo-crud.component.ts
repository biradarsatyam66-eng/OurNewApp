import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


interface Itodo{
  todoitem: string;
  todoid: string;
}



@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.scss']
})
export class TodoCRUDComponent implements OnInit {

  @ViewChild('todo') todo !: ElementRef
  edittodo !: Itodo;
  constructor() { }

  ngOnInit(): void {
  }

  isinEditMode = false

  todoArr : Itodo[] = [{
    todoitem : 'JS',
    todoid : '12' 
  },
  {
    todoitem : 'TS',
    todoid : '123' 
  },
  {
    todoitem : 'NODE.JS',
    todoid : '112' 
  },
  {
    todoitem : 'CSS',
    todoid : '176' 
  },
  {
    todoitem : 'HTML',
    todoid : '199' 
  }
];

  // onAddTodo(eve: HTMLInputElement){
  //   let new_todo = {
  //     todoitem : eve.value,
  //     todoid : Date.now().toString()
  //   }
  //   this.todoArr.unshift(new_todo)
  //   eve.value = ''
  // }


  // onDelete(todoid : string){
  //   let getIndex = this.todoArr.findIndex(i=>i.todoid === todoid)
  //   this.todoArr.splice(getIndex,1)
  // }

  // onEdit(t : Itodo){
  //   this.edittodo = t;
  //   this.isinEditMode = true;
  //   this.todo.nativeElement.value = t.todoitem
  // }

  // onupdateTodo(){
  //   let update_id = this.edittodo.todoid;

  //   let update_obj = {
  //     todoitem : this.todo.nativeElement.value,
  //     todoid : update_id
  //   }

  //   let getindex = this.todoArr.findIndex(i=>i.todoid === update_id)
  //   this.todoArr[getindex] = update_obj
  //   this.isinEditMode = false;

  //   this.todo.nativeElement.value = ''
  // }


  onAddTodo(ele : HTMLInputElement){
    let new_obj = {
      todoitem : ele.value,
      todoid : Date.now().toString()
    }
    ele.value = ''
    this.todoArr.unshift(new_obj)
  }

  onEdit(t : Itodo){
    this.edittodo = t
    this.isinEditMode = true
    this.todo.nativeElement.value = t.todoitem
  }

  onupdate(){
    let update_id = this.edittodo.todoid;

    let update_obj = {
      todoitem : this.todo.nativeElement.value,
      todoid : update_id
    }

    this.todo.nativeElement.value = ''

    let getindex = this.todoArr.findIndex(t=> t.todoid === update_id)
    this.todoArr[getindex] = update_obj
    this.isinEditMode = false
  }

  onremove(t : string){
    let getindex = this.todoArr.findIndex(i=> i.todoid === t)
    this.todoArr.splice(getindex,1)
  }
}
