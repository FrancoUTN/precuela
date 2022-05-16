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

  public constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService
    ) {}

  ngOnInit(): void {
    this.forma = this.fb.group({
      // 'id': ['4', [Validators.required]],
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      // 'pais': ['', Validators.required],
      // 'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      // 'sexo': ['', Validators.required]
    });
  }

  public aceptar(): void {
    // console.log(this.forma.getRawValue());
    
    let obj = this.forma.getRawValue();

    // obj.pais = this.pais;

    // this.actor = obj;

    // console.log(this.actor);

    // this.actoresService.agregar(this.actor);
  }

}
