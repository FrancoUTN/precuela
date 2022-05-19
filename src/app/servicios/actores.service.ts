import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Actor } from '../modelos/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  // api: string = 'assets/actores.json';
  // api: string = 'https://ng-complete-guide-14c79-default-rtdb.firebaseio.com/actores.json';

  coleccion:AngularFirestoreCollection<any>;
  items:Array<any> = [];

  // constructor(private http: HttpClient) { }
  constructor(private angularFirestore: AngularFirestore) {
    this.coleccion = angularFirestore.collection('actores');
  }

  // todos(): Observable<any> {
  //   return this.http.get(this.api);
  // }

  // agregar(data: any): Observable<any> {
  //   return this.http.post(this.api, data);
  // }

  todos() {
    this.coleccion.get().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => this.items.push({id: doc.id, ...doc.data()})
        );

        console.log(this.items);
      }
    );
  }

  agregar(data: any) {
    this.coleccion.add(data);
  }
}
