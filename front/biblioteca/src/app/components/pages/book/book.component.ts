import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros.service';
import { NgForm } from '@angular/forms';
import { CreateLibro, Libro } from '../../../models/libro.interfaz';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  public libro: CreateLibro = {
    title: '',
    year: '',
    gender: '',
    pages: 0,
    editorial: '',
    autor: ''

  }

  constructor(private LibrosService: LibrosService, private navigate: Router) {

  }

  ngOnInit(): void {
  }

  registerBook(form: NgForm) {

    if (form.invalid) {

      return;

    }
    Swal.showLoading();


    this.LibrosService.registerBook(this.libro).subscribe((data) => {

      if (data[`ok`] === false) {
        Swal.fire({
          title: 'error',
          text: data[`message`],
          icon: 'error'
        })
      } else {

        Swal.fire({
          title: 'Correcto',
          text: 'El libro se ha guardado correctamente',
          icon: 'success',
          confirmButtonText: `OK`,
          allowOutsideClick: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.navigate.navigate(['/biblioteca/libros']);
          }
        })

      }
    });

  }

}
