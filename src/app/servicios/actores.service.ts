import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../modelos/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  // api: string = 'assets/actores.json';
  api: string = 'https://ng-complete-guide-14c79-default-rtdb.firebaseio.com/actores.json';

  constructor(private http: HttpClient) { }

  todos(): Observable<any> {
    return this.http.get(this.api);    
  }

  agregar(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }
}
