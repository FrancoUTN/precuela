import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private storage: AngularFireStorage) { }

  subir(filePath:string, file:File) {
    this.storage.upload(filePath, file);
  }
}
