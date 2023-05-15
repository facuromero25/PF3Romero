import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';



import { Inscripciones } from '../inscripciones.component';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesServicesService {




  private inscripciones$ = new BehaviorSubject<Inscripciones[]>([
    {
      id: 1,
      nombre: 'Juan sosa',
      curso: 'angular',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'camila Lopez',
      curso: 'Javascript',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'sol santillan',
      curso: 'javascript',
      fecha_registro: new Date()
    },
  ])

  constructor() { }

  obtenerInscripciones(): Observable<Inscripciones[]> {
    return this.inscripciones$.asObservable();
  }

  obtenerInscripcionesPorId(id: number): Observable<Inscripciones | undefined> {
    return this.inscripciones$.asObservable()
      .pipe(
        map((inscripciones) => inscripciones.find((a) => a.id === id))
      )
  }
}
