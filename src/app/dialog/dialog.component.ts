import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../Models/categoriesModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  categories: Category[];

  // dialogForm !: FormGroup;
  constructor(
    private formCreator : FormBuilder,
    @Inject(MAT_DIALOG_DATA) readonly data: { categories: Category[] },
  ) { 
    this.categories = [];
  }

  readonly createFrom = this.formCreator.group({
    todoName: ['', Validators.required, Validators.maxLength(100)],
    categoriesTodo : ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.categories = this.data.categories;
  }

  addTodo() {
    console.log(this.createFrom.value);
  }
}