import { Component } from '@angular/core';
import { Card, CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo_angular-oblakogroup';
  public cards: Card[] | undefined

  constructor(
    private cardService: CardsService
  ) {}

  ngOnInit(): void {
    this.getAllCards()
  }

  private getAllCards() {
    this.cardService.getCards().subscribe(cards => this.cards = cards)
  }
}
