import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosDetalleComponent } from './pages/alumnos-detalle/alumnos-detalle.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent
      },
      {
        path: ':id',
        component: AlumnosDetalleComponent,
      }
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class AlumnosRoutingModule { }
