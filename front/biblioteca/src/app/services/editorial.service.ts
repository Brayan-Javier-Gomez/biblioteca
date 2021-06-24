import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EditorialModel } from '../models/editorial.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  url = 'http://localhost:3000/editorial'

  constructor(private http: HttpClient) { }



getEditorial():Observable<EditorialModel>{
  return this.http.get<EditorialModel>(this.url);
}

}
