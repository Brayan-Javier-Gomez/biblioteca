import { Component, OnInit } from '@angular/core';
import { AutorModel } from 'src/app/models/autor.model';
import { AutorService } from '../../../services/autor.service';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit {

  public autors;

  constructor(public autorService: AutorService) { 
    this.getAutors();
  }

  ngOnInit(): void {
  }


  getAutors() {
    this.autorService.getAutors().subscribe((data: AutorModel) => {
      this.autors = data.autores;
    })
  }

}
