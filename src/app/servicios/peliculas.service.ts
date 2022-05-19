import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FotosService } from 'src/app/servicios/fotos.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  coleccion:AngularFirestoreCollection<any>;
  items:Array<any> = [];

  constructor(private angularFirestore: AngularFirestore, private fotosService: FotosService) {
    this.coleccion = angularFirestore.collection('peliculas');
  }

  llenarLista(props:Array<any>) {
    this.coleccion.get().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => props.push({id: doc.id, ...doc.data()})
        );
      }
    );
  }

  retornarColeccion() {
    return this.coleccion.get();
  }

  agregar(data: any) {
    return this.coleccion.add(data);
  }
  
  modificar(path: string) {  
    let ref = this.fotosService.bajar(path);

    ref.getDownloadURL().subscribe(
      url => {
        this.coleccion.doc(path).update(
           {foto:url}
         );
      }
    );
  }
}
