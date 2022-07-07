import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CreateTodo } from 'src/app/Models/createTodo';
import { Card } from 'src/app/Models/card';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-creator-todo',
  templateUrl: './creator-todo.component.html',
  styleUrls: ['./creator-todo.component.scss']
})
export class CreatorTodoComponent implements OnInit {
  public creationTodo: CreateTodo = {todo: {text: '', project_title: ''}}
  public selectedCategory: string = ''

  constructor(
    public dailogref: MatDialogRef<CreatorTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card[],
    private todoService: TodoService,
  ) { }

  public ngOnInit(): void {
    console.log(this.data);
  }

  public onCancelClick(): void {
    this.dailogref.close();
  }

  public createTodo(): void {
    if (this.selectedCategory !== 'new') {
      this.creationTodo.todo.project_title = this.selectedCategory
    }
    this.todoService.addTodo(this.creationTodo).subscribe(()=>{})
  }
}
