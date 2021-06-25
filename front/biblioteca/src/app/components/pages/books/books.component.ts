import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { Libro } from '../../../models/libro.interfaz';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public libros;
  public estado = 'vacio';




  constructor(public libroService: LibrosService) {

    this.getBoooks();
  }

  ngOnInit(): void {

  }


  getBoooks() {

    this.libroService.getBooks().subscribe((data: Libro) => {
      this.libros = data.libros;
      console.log(this.libros.length);
      if (this.libros.length > 0){
      this.estado = 'lleno';
      }else{
        this.estado = 'vacio';
      }

    });
  }


  searchBook(query: string) {


    if (!query) {
      this.getBoooks();
      return;
    }

    this.libroService.searchBook(query).subscribe((data) => {
      this.libros = data["result"];
      if (this.libros.length > 0){
        this.estado = 'lleno';
        }else{
          this.estado = 'vacio';
        }

    });
  }

}
