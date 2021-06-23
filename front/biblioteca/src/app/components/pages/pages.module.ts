import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BooksComponent } from './books/books.component';
import { AutorsComponent } from './autors/autors.component';
import { EditorialsComponent } from './editorials/editorials.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [BooksComponent, AutorsComponent, EditorialsComponent, BookComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
