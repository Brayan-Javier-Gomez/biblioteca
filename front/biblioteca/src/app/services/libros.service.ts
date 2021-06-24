import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Libro } from '../models/libro.interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros:any = [];
  url = 'http://localhost:3000/libros'

  constructor(private http: HttpClient) { 
  this.getBooks();
  }



  getBooks():Observable<Libro>{
    return this.http.get<Libro>(this.url);
  }


}
