import { Todo } from "./todo";

export class Project {
    id: number;
    title: string;
    todos: Todo[];
  
    constructor(title: string, todos: Todo[]) {
      this.id = 0;
      this.title = title;
      this.todos = todos;
    }
}