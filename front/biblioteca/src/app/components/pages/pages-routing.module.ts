import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AutorsComponent } from './autors/autors.component';
import { EditorialsComponent } from './editorials/editorials.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'libros', component: BooksComponent},
      {path: 'libro', component: BookComponent},
      {path: 'autor', component: AutorsComponent},
      {path: 'editorial', component: EditorialsComponent},
      {path: '**', redirectTo: 'libros'},

    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
