import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  // dialogForm !: FormGroup;
  constructor(
    private formCreator : FormBuilder,
  ) { }

  readonly createFrom = this.formCreator.group({
    todoName: ['', Validators.required, Validators.maxLength(100)],
    categoriesTodo : ['', [Validators.required]],
  });

  ngOnInit(): void {}

  addTodo() {
    console.log(this.createFrom.value);
  }
}