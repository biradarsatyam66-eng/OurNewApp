import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from '../product/product.component';
import { CommentComponent } from '../comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './image/image.component'
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{EventComponent} from './Event/event.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCRUDComponent } from './todo-crud/todo-crud.component';
import { StdCRUDComponent } from './std-crud/std-crud.component';
import { TwowaytodoComponent } from './twowaytodo/twowaytodo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CommentComponent,
    ImageComponent,
    EventComponent,
    TodoComponent,
    TodoCRUDComponent,
    StdCRUDComponent,
    TwowaytodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
