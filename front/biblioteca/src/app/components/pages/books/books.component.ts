import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

 

  constructor(public libroService: LibrosService) { 

  }

  ngOnInit(): void {
  }

}
