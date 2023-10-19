import { Component } from '@angular/core';
import { Todo } from 'src/shared/models/todo';

const filterTodosMethods = [
  (todo: Todo) => (todo),
  (todo: Todo) => (!todo.isComplete),
  (todo: Todo) => (todo.isComplete)
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Array<Todo> = [
    new Todo("To go to interview"),
    new Todo("To learn Angular"),
    new Todo("To get a coffee"),
    
  ];
  title = 'testing';
  selectedOptionToShow:number = 0;

  get todosToShow() :Array<Todo> {
    return this.todos.filter(filterTodosMethods[this.selectedOptionToShow])
  }

  addNewTodo(todo: Todo) {
    this.todos.push(todo);
  }
  
}
