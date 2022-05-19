import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/modelos/Actor';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  pais:any;
  forma !: FormGroup;
  actor:Actor|undefined;
  // actor:any;

  public constructor(
    private fb: FormBuilder,
    private actoresService: ActoresService
    ) {}

  ngOnInit(): void {
    this.forma = this.fb.group({
      // 'id': ['', [Validators.required]],
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      // 'pais': ['', Validators.required],
      // 'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      // 'sexo': ['', Validators.required]
    });  

    // this.actoresService.todos().subscribe(
    //     t => console.log(t)
    //   );
  }

  public aceptar(): void {    
    let obj = this.forma.getRawValue();
    obj.pais = this.pais;
    this.actor = obj;

    // this.actoresService.agregar(this.actor).subscribe(response => {console.log(response)});
    this.actoresService.agregar(this.actor);
  }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

}
