import { Todo } from "./todo";

export class Card {
    id: number;
    title: string;
    todos: Todo[];
  
    constructor(title: string, todos: Todo[]) {
      this.id = 0;
      this.title = title;
      this.todos = todos;
    }
}