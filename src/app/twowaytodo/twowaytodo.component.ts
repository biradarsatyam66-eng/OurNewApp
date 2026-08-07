import { Component, OnInit } from '@angular/core';

interface Itodo{
  todoitem: string;
  todoid: string;
}

@Component({
  selector: 'app-twowaytodo',
  templateUrl: './twowaytodo.component.html',
  styleUrls: ['./twowaytodo.component.scss']
})
export class TwowaytodoComponent implements OnInit {


  isinEditMode : boolean = false
  todoinputValue !: string
  editinput !:Itodo

  constructor() { }

  ngOnInit(): void {
  }

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

  onAdd(){
    let todoobj = {
      todoitem : this.todoinputValue,
      todoid : Date.now().toString()
    }
    this.todoinputValue = ''
    this.todoArr.unshift(todoobj)
  }

  onEdit(t : Itodo){
    this.editinput = t
    this.isinEditMode = true
    this.todoinputValue = t.todoitem
  }

  onUpdate(){
    let update_id = this.editinput.todoid

    let update_obj = {
      todoitem : this.todoinputValue,
      todoid : update_id
    }
    this.todoinputValue = ''
    this.isinEditMode = false

    let getindex = this.todoArr.findIndex(i => i.todoid === update_id)
    this.todoArr[getindex] = update_obj
  }

  onDelete(todoid : string){
    let getindex = this.todoArr.findIndex(i=> i.todoid === todoid)
    this.todoArr.splice(getindex,1)
  }

}
