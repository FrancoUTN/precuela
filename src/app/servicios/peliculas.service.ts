import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  api: string = 'assets/peliculas.json';

  constructor(private http: HttpClient) { }

  todas(): Observable<any> {
    return this.http.get(this.api);    
  }
}
