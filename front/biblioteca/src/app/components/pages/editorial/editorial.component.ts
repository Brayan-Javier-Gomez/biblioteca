import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../../../services/editorial.service';
import { NgForm } from '@angular/forms';
import { Editorial } from 'src/app/models/editorial.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  public editorial: Editorial = {
    name: '',
    adress: '',
    phone_number: 0,
    email: '',
    max_limit: -1,
    libros: 0,

  }

  constructor(private editorialService: EditorialService, private navigate: Router) { }

  ngOnInit(): void {
  }


  registerEditorial(form: NgForm) {

    if (form.invalid) {

      return;

    }

    Swal.showLoading();


    this.editorialService.registerEditorial(this.editorial).subscribe((data) => {
      if (data[`ok`] === false) {

        Swal.fire({
          title: 'error',

          text: data[`message`],

          icon: 'error'

        })
      } else {

        Swal.fire({

          title: 'Correcto',

          text: 'La editorial ha sido registrada con exito',

          icon: 'success',

          confirmButtonText: `OK`,

          allowOutsideClick: false

        }).then((result) => {

          if (result.isConfirmed) {

            this.navigate.navigate(['/biblioteca/editorial']);

          }
        });

      }
    })


  }

}
