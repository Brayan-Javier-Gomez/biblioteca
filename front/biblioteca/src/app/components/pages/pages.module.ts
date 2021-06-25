import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { BooksComponent } from './books/books.component';
import { AutorsComponent } from './autors/autors.component';
import { EditorialsComponent } from './editorials/editorials.component';
import { BookComponent } from './book/book.component';
import { AutorComponent } from './autor/autor.component';
import { EditorialComponent } from './editorial/editorial.component';


@NgModule({
  declarations: [BooksComponent, AutorsComponent, EditorialsComponent, BookComponent, AutorComponent, EditorialComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
