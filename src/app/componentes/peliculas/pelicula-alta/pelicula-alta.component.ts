import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/modelos/Actor';
import { Pelicula } from 'src/app/modelos/Pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  pelicula:Pelicula|undefined;

  forma !: FormGroup;
  actor:Actor|undefined;
  added:boolean = false;

  public constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService
    ) {}

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaEstreno': ['', Validators.required],
      // 'cantidadPublico': ['', [Validators.required, Validators.min(100), Validators.max(500)]],
      'cantidadPublico': ['', Validators.required]
    });
  }

  public aceptar(): void {    
    let obj = this.forma.getRawValue();
    obj.actor = this.actor;
    this.pelicula = obj;

    this.peliculasService.agregar(this.pelicula);

    this.added = true;
  }

}
