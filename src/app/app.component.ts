import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { Card, CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo_angular-oblakogroup';

  constructor(
    private dialog: MatDialog,
  ) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }
}
