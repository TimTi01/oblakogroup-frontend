import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

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

  constructor() {}
}
