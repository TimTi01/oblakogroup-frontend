import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public cardId: number | undefined;
  @Input()
  public todos: Todo[] | undefined;
  @Input()
  public title: string | undefined;

  ngOnInit(): void {}

  constructor(
    private cardService: CardsService
  ) {}

  // toggleStatus(todoId: number) {
  //   this.cardService.toggleTaskStatus(this.cardId, todoId).subscribe(() => {});
  //   console.log('cardId : ', this.cardId, 'todoId : ', todoId, 'title : ', this.title);
  // }
  toggleStatus(todo: Todo) {
    this.cardService.toggleTaskStatus(this.cardId, todo).subscribe(() => {});
    console.log('cardId : ', this.cardId, 'todoId : ', todo.id, 'title : ', this.title);
  }
}