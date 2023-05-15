export interface Curso {
  id: number;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}

export interface CrearCursoPayload {
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}
