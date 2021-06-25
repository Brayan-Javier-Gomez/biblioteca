import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AutorsComponent } from './autors/autors.component';
import { EditorialsComponent } from './editorials/editorials.component';
import { AutorComponent } from './autor/autor.component';
import { EditorialComponent } from './editorial/editorial.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'libros', component: BooksComponent},
      {path: 'libro', component: BookComponent},
      {path: 'autor', component: AutorComponent},
      {path: 'autors', component: AutorsComponent},
      {path: 'editorials', component: EditorialsComponent},
      {path: 'editorial', component: EditorialComponent},
      {path: '**', redirectTo: 'libros', pathMatch: 'full'},

    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
