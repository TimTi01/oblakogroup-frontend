import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTodo } from '../Models/createTodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public addTodo(todoData: CreateTodo): Observable<void> {
    return this.httpClient.post<void>(`https://rails-todo-oblakogroup.herokuapp.com/todo`, todoData);
  }
}
