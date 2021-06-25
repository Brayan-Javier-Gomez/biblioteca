import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorModel } from '../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  // public autors;

  url = 'https://biblioteca-brayan.herokuapp.com/autor';

  constructor(private http: HttpClient) { }

  getAutors(): Observable<AutorModel> {

    return this.http.get<AutorModel>(this.url);

  }


  registerAutor(body){

    return this.http.post(`${this.url}` , body);
 
  }




}
