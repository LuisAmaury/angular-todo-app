import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';
  todoArray = [];

  addTodo(value){
    this.todoArray.push(value);
    // console.log(this.todoArray); 
  }

  deleteItem(value){
    for(let i=0; i<= this.todoArray.length; i++){
      if(value == this.todoArray[i]){
        this.todoArray.splice(i, 1);
      }
    }  
  }

  todoSubmit(value: any){
    console.log(value);
    
    if(value != ""){
      this.todoArray.push(value.todo);
    }else{
      alert("Field required ** ");
    }
    
  }
}
