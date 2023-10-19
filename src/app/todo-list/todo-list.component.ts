import { Component, Input } from '@angular/core';
import { Todo } from 'src/shared/models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Array<Todo> = [];

  toggleComplete(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }
}
