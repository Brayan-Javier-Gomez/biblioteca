import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros:any = [];
  url = 'http://localhost:3000/libros'

  constructor(private http: HttpClient) { 
  this.getBooks();
  }



  getBooks(){
    return this.http.get(this.url)
  }


}
