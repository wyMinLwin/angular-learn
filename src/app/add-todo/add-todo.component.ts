import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/shared/models/todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodoText: string = '';
  @Output() addTodo = new EventEmitter<Todo>();


  addNewTodo() {
    this.addTodo.emit(new Todo(this.newTodoText));
    this.newTodoText = '';
  }
}
