import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private url = 'https://rails-todo-oblakogroup.herokuapp.com/projects'

  constructor(private httpClient: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.url)
  }
}
