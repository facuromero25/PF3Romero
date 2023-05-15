import { Component, Inject, OnDestroy } from '@angular/core';
import { Inscripciones } from '../inscripciones.component';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AlumnosService } from '../../alumnos/services/alumnos.service';
import { InscripcionesServicesService } from '../services/inscripciones-services.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../../alumnos/alumnos.component';
import { Curso } from '../../cursos/models';
import { AbmInscripcionesComponent } from '../abm-inscripciones/abm-inscripciones.component';
import { CursoServiceService } from '../../cursos/services/curso-service.service';

@Component({
  selector: 'app-detalle-inscripciones',
  templateUrl: './detalle-inscripciones.component.html',
  styleUrls: ['./detalle-inscripciones.component.scss']
})
export class DetalleInscripcionesComponent  {
  cursos: Curso[] = [];
  alumnos: Alumno[] = [];
  cursoControl = new FormControl('', [Validators.required]);
  alumnoControl = new FormControl('', [Validators.required]);
  fechaControl = new FormControl('', [Validators.required]);

  inscripcionesForm = new FormGroup({
    curso: this.cursoControl,
    alumno: this.alumnoControl,
    fecha: this.fechaControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AbmInscripcionesComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private CursoServiceService: CursoServiceService,
    private alumnosService: AlumnosService
  ) {
    this.CursoServiceService.obtenerCursos().subscribe((success: Curso[]) => {
      this.cursos = success;
    });

    this.alumnosService.obtenerAlumnos().subscribe((success: Alumno[]) => {
      this.alumnos = success;
    });
    if (data) {
      this.cursoControl.setValue(data.inscripcionParaEditar.curso.nombre);
      this.alumnoControl.setValue(data.inscripcionParaEditar.alumno.nombre);
      this.fechaControl.setValue(data.inscripcionParaEditar.curso.fecha_inicio);
    }
  }

  guardar(): void {
    if (this.inscripcionesForm.valid) {
      //al cerrar el diálogo emito el valor del formulario que será observado en el inscripcion.component.ts
      this.dialogRef.close(this.inscripcionesForm.value);
    } else {
      this.inscripcionesForm.markAllAsTouched();
    }
  }
}

