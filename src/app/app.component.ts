import { Component } from '@angular/core';
import { Todo } from 'src/shared/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Array<Todo> = [
    new Todo("To go to interview",true),
    new Todo("To learn Angular"),
    new Todo("To get a coffee")
  ];
  title = 'testing';
}
