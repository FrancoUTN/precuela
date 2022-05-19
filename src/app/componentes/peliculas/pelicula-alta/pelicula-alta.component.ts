import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { FotosService } from 'src/app/servicios/fotos.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  pelicula:any;

  forma !: FormGroup;
  actor:any;
  file:File|any;
  added:boolean = false;

  public constructor(
    private fb: FormBuilder,
    private peliculasService: PeliculasService,
    private fotosService: FotosService
    ) {}

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaEstreno': ['', Validators.required],
      // 'cantidadPublico': ['', [Validators.required, Validators.min(100), Validators.max(500)]],
      'cantidadPublico': ['', Validators.required],
    });
  }

  public aceptar(): void {    
    let obj = this.forma.getRawValue();
    obj.actor = this.actor;
    this.pelicula = obj;

    this.peliculasService.agregar(this.pelicula).then(
      docRef => {
        this.fotosService.subir(docRef.id, this.file).then(
          () => {
            this.peliculasService.modificar(docRef.id)
            this.added = true
          }
        );
      }
    );
  }

  uploadFile(event:any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}
