import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AbmInscripcionesComponent } from './abm-inscripciones/abm-inscripciones.component';
import { DetalleInscripcionesComponent } from './detalle-inscripciones/detalle-inscripciones.component';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    InscripcionesComponent,
    AbmInscripcionesComponent,
    DetalleInscripcionesComponent
  ],
  imports: [
    DirectivesModule,
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: InscripcionesComponent
      }
    ])

  ]
})
export class InscripcionesModule { }
