import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreatorTodoComponent } from './Components/creator-todo/creator-todo.component';
import { Card, CardsService } from './services/cards.service';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo_angular-oblakogroup';

  public cards: Card[] | undefined;

  constructor(
    public dialog: MatDialog,
    private cardService: CardsService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreatorTodoComponent, {
        height: '300px',
        width: '400px',
        data: this.cards
      }
    )
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      this.cardService.emitter.emit()
    })
  }
}
