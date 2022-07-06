import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

export interface Card {
  id:    number;
  title: string;
  todos: TodoElement[];
}

export interface TodoElement {
  id:           number;
  text:         string;
  is_completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  public emitter: EventEmitter<void> = new EventEmitter<void>() 

  // private url = 'https://rails-todo-oblakogroup.herokuapp.com/projects'
  private url = 'http://127.0.0.1:3000/projects'
  //https://rails-todo-oblakogroup.herokuapp.com/projects/${cardId}/todos/${todoId}

  constructor(private httpClient: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.url)
  }

  // public toggleTaskStatus(cardId: number | undefined, todoId: number): Observable<void> {
  //   return this.httpClient.patch<void>(`http://127.0.0.1:3000/projects/${cardId}/todos/${todoId}`, null)
  // }
  public toggleTaskStatus(cardId: number | undefined, todo: Todo): Observable<void> {
    return this.httpClient.patch<void>(`http://127.0.0.1:3000/projects/${cardId}/todos/${todo.id}`, todo)
  }
}
