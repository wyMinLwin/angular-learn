import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/shared/models/todo';
const filterTodosMethods = [
  (todo: Todo) => (todo),
  (todo: Todo) => (!todo.isComplete),
  (todo: Todo) => (todo.isComplete)
]

@Component({
  selector: 'filter-todos',
  templateUrl: './filter-todos.component.html',
  styleUrls: ['./filter-todos.component.css']
})
export class FilterTodosComponent {
  constructor() {}
  ngOnInit() : void {
    this.emitSelectOption(0);
  }
  @Input() filterFunc = (todo:Todo):Todo|boolean => (todo);
  @Output() filterFuncChange = new EventEmitter<(todo:Todo) => Todo|boolean>();
  selectedOptionToShow: number = 0;
  emitSelectOption(option:number) {
    this.filterFunc = filterTodosMethods[option];
    return this.filterFuncChange.emit(this.filterFunc);
  }

  
}
