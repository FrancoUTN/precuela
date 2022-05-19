import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  coleccion:AngularFirestoreCollection<any>;
  items:Array<any> = [];

  constructor(private angularFirestore: AngularFirestore) {
    this.coleccion = angularFirestore.collection('actores');
  }

  // todos() {
  //   this.coleccion.get().subscribe(
  //     (qs) => {
  //       qs.forEach(
  //         (doc) => this.items.push({id: doc.id, ...doc.data()})
  //       );
  //     }
  //   );    
  // }

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
