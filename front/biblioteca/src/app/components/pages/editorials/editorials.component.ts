import { Component, OnInit } from '@angular/core';
import { EditorialModel } from 'src/app/models/editorial.model';
import { EditorialService } from '../../../services/editorial.service';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrls: ['./editorials.component.css']
})
export class EditorialsComponent implements OnInit {

  public editorial;

  constructor(public edService: EditorialService) {

    this.getEditorial()

  }

  ngOnInit(): void {
  }

  getEditorial() {
    this.edService.getEditorial().subscribe((data: EditorialModel) => {
      this.editorial = data.editoriales;
      console.log(this.editorial);
    });
  }

}
