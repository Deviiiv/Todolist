import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  todoList: any[] = [] ;
  inputvalue : string ="";
  editinputvalue: string=""
  editValue: any;
  show:any = "";

 constructor() {}

 ngOnInit():void{
  this.todoList=["Task 1", "Task 2"];

 }
 edittodo(name:string){
  // this.todoList = this.todoList.filter(value => value !== name); 
  this.show = name;
 }

 updatedEditValue(inputValue:any){
  console.log("updatedName", inputValue)
  this.editValue = inputValue;
 }

 updateValue(name:any){
  this.todoList = this.todoList.map((value) =>{
    console.log("name", name)
    if(value == name){
      return this.editValue;
    }
    return value
    
  } ); 
 }
 removetodo (name:string): void{                                          
  this.todoList = this.todoList.filter(value => value !== name);
}

addtodo(){
  if(this.inputvalue!=""){
this.todoList.push(this.inputvalue);
this.inputvalue="";
}else{
  alert("pleas Enter proper value ..")
}
}
}

