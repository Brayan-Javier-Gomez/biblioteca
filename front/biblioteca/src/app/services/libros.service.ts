import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Libro } from '../models/libro.interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: any = [];
  url = 'https://biblioteca-brayan.herokuapp.com/';

  constructor(private http: HttpClient) {

    this.getBooks();

  }



  getBooks(): Observable<Libro> {

    return this.http.get<Libro>(`${this.url}libros`);

  }


  searchBook(query: string): Observable<Libro> {

    return this.http.get<Libro>(`${this.url}search/${query}`);

  }

  registerBook(body) {

    return this.http.post(`${this.url}libro`, body);

  }


}
