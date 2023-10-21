import { Component, Output, booleanAttribute } from '@angular/core';
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

  selectOption:number = 0;
  
  filterFunc = (todo:Todo):Todo|boolean => (todo) ;

  addNewTodo(todo: Todo) {
    this.todos.push(todo);
  }
  
}
