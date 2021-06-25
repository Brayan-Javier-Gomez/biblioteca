import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from '../../../services/autor.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  constructor(private autorService: AutorService , private navigate: Router) { }

  public autor: Autor = {
    name: '',
    year: '',
    city: '',
    email: ''
  }

  ngOnInit(): void {
  }


  registerAutor(form: NgForm) {

    if (form.invalid) {

      return;

    }

    Swal.showLoading();


    this.autorService.registerAutor(this.autor).subscribe((data) => {

      if (data[`ok`] === false) {

        Swal.fire({
          title: 'error',
          text: data[`message`],
          icon: 'error'
        })
      }else {

        Swal.fire({
          title: 'Correcto',
          text: 'El autor ha sido registrado correctamente',
          icon: 'success',
          confirmButtonText: `OK`,
          allowOutsideClick: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.navigate.navigate(['/biblioteca/autors']);
          }
        });

      }
    })
  }





}
