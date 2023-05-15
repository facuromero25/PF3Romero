import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbmAlumnosComponent } from '../../alumnos/abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.scss']
})
export class AbmInscripcionesComponent {

  nombreControl = new FormControl('', [Validators.required]);
  cursoControl = new FormControl('', [Validators.required]);

  cursosForm = new FormGroup({
    nombre: this.nombreControl,
    curso: this.cursoControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    if (data) {
      this.nombreControl.setValue(data.alumnoParaEditar.nombre);
      this.cursoControl.setValue(data.alumnoParaEditar.apellido);
    }
  }


  guardar(): void {
    if (this.cursosForm.valid) {
      this.dialogRef.close(this.cursosForm.value)
    } else {
      this.cursosForm.markAllAsTouched();
    }
  }
}
