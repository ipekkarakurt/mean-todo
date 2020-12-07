import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "../models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  API = 'http://localhost:3000';

  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllTodos();
  }

  addTodo(text: string) {
    this.http.post(`${this.API}/todos`, {todo: text})
      .subscribe(() => {
        this.getAllTodos();
      })
  }

  deleteTodo(todo: Todo) {
  	this.http.delete(`${this.API}/todos/${todo._id}`)
      .subscribe(() => {
        this.getAllTodos();
      })
  }

  getAllTodos() {
    this.http.get(`${this.API}/todos`)
      .subscribe((todos: any) => {
        this.todos = todos
      })
  }
}