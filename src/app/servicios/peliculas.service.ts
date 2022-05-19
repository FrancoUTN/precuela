import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  coleccion:AngularFirestoreCollection<any>;
  items:Array<any> = [];

  constructor(private angularFirestore: AngularFirestore) {
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

  agregar(data: any) {
    this.coleccion.add(data);
  }
}
