import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { FotosService } from 'src/app/servicios/fotos.service';

@Component({
  selector: 'app-modificador',
  templateUrl: './modificador.component.html',
  styleUrls: ['./modificador.component.scss']
})
export class ModificadorComponent implements OnInit {

  @Input() pelicula:any;
  @Output() peliculaModificada:EventEmitter<any> = new EventEmitter<any>();

  forma !: FormGroup;
  updated:boolean = false;

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

  ngOnChanges() {
    if (this.pelicula) {
      this.forma.setValue({
        nombre:this.pelicula.nombre,
        tipo:this.pelicula.tipo,
        fechaEstreno:this.pelicula.fechaEstreno,
        cantidadPublico:this.pelicula.cantidadPublico
      });
    }
  }

  public aceptar(): void {    
    let obj = this.forma.getRawValue();
    
    let aux = {...this.pelicula, ...obj};

    this.peliculasService.alterar(aux).then(
      () => {
        this.updated = true;
        this.peliculaModificada.emit(aux);
      }
    );
  }
}
