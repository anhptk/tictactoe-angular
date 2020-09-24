import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BoardComponent, CellComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
