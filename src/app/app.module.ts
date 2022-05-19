import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './componentes/actor/actor-pelicula/actor-pelicula.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { TablaPeliculaComponent } from './componentes/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './componentes/actor/tabla-actor/tabla-actor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    ActorPeliculaComponent,
    MenuComponent,
    FooterComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
