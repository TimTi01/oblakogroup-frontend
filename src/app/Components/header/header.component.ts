import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/Models/card';
import { CardsService } from 'src/app/services/cards.service';
import { CreatorTodoComponent } from '../creator-todo/creator-todo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public cards: Card[] | undefined;

  constructor(
    public dialog: MatDialog,
    private cardService: CardsService
  ) { }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(CreatorTodoComponent, {
        height: '280px',
        width: '230px',
        data: this.cards
      }
    )
    dialogRef.afterClosed().subscribe((data) => {
      this.cardService.emitter.emit()
    })
  }
}
