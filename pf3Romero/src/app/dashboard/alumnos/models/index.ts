

import { Curso } from '../../cursos/models';
import { Alumno } from './alumno';


export interface Inscripcion {
  id: number;
  curso: Curso;
  alumno: Alumno;
  fechaInscripcion: Date;
}
