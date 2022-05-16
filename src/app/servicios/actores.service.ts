import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  api: string = 'assets/actores.json';

  constructor(private http: HttpClient) { }

  todos(): Observable<any> {
    return this.http.get(this.api);    
  }

  agregar(data: any) {
    return this.http.post(this.api, data);
  }
}
