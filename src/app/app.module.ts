import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterial } from './angularMaterial.module';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './Components/card/card.component';
import { ProjectComponent } from './Components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DialogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    angularMaterial,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
