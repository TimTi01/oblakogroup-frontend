import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTodo } from 'src/app/Models/createTodo';
import { Card } from 'src/app/services/cards.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-creator-todo',
  templateUrl: './creator-todo.component.html',
  styleUrls: ['./creator-todo.component.scss']
})
export class CreatorTodoComponent implements OnInit {
  public creationTodo: CreateTodo = {taskName: '', category: ''}
  public selectedCategory: string = ''

  constructor(
    private todoService: TodoService,
    public dailogref: MatDialogRef<CreatorTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card[],
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  public onCancelClick(): void {
    this.dailogref.close();
  }

  public createTodo(): void {
    if (this.selectedCategory !== 'new') {
      this.creationTodo.category = this.selectedCategory
    }
    this.todoService.addTodo(this.creationTodo).subscribe(()=>{})
  }
}
