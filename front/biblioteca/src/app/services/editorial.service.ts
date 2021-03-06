import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EditorialModel } from '../models/editorial.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  url = 'https://biblioteca-brayan.herokuapp.com/editorial';

  constructor(private http: HttpClient) { }



getEditorial():Observable<EditorialModel>{
  return this.http.get<EditorialModel>(this.url);
}

registerEditorial(body){
  return this.http.post(`${this.url}`, body);
}

}
