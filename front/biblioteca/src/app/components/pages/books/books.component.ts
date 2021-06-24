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



  constructor(public libroService: LibrosService) {

    this.getBoooks();
  }

  ngOnInit(): void {

  }

  getBoooks() {

    this.libroService.getBooks().subscribe((data: Libro) => {
      this.libros = data.libros;
      console.log(this.libros);

    });
  }

}
