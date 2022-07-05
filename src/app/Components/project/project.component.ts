import { Component, OnInit } from '@angular/core';
import { Card, CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public cards: Card[] | undefined

  constructor(
    private cardService: CardsService
  ) { }

  ngOnInit(): void {
    this.getAllCards()
  }

  private getAllCards() {
    this.cardService.getCards().subscribe(cards => this.cards = cards)
  }
}
