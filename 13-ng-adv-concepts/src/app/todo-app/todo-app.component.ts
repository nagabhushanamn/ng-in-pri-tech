import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {

  todos: Todo[] = []
  todo = new Todo("learn")

  constructor() { }

  @ContentChild(TodoComponent, null) todoContentChild: TodoComponent;

  // @ViewChild(TodoComponent) todoViewChild: TodoComponent
  @ViewChildren(TodoComponent) todoViewChildren: QueryList<TodoComponent>;
  @ViewChild("header", null) headerEl: ElementRef;


  // ngOnInit() {
  //   console.log('TodoApp :: ngOnInit()')
  // }

  ngAfterContentInit() {
    console.log('TodoApp :: ngAfterContentInit() ')
    console.log(this.todoContentChild)
    //...
  }

  ngAfterContentChecked() {
    console.log("TodoApp :: ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log('TodoApp :: ngAfterViewInit() ')
    console.dir(this.todoViewChildren)
    // console.dir(this.headerEl)
    // if (this.todoViewChildren.length === 1)
    //   this.headerEl.nativeElement.textContent = "Todo"
  }

  ngAfterViewChecked() {
    console.log("TodoApp :: ngAfterViewChecked");
    if (this.todoViewChildren.length > 0)
      this.headerEl.nativeElement.textContent = "Todos"
  }


  addTodo() {
    this.todos.unshift(new Todo('item'))
  }


  clearTodos() {
    this.todos = []
  }

}