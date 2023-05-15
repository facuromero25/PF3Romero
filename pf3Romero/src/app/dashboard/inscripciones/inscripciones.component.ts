import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { InscripcionesServicesService } from './services/inscripciones-services.service';
import { AbmInscripcionesComponent } from './abm-inscripciones/abm-inscripciones.component';


export interface Inscripciones {
  id: number;
  nombre: string;
  curso: string;
  fecha_registro: Date;
}
@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent {


  dataSource = new MatTableDataSource<Inscripciones>();

  displayedColumns: string[] = ['id', 'alumno', 'curso', 'fecha_registro', 'ver_detalle', 'eliminar', 'editar'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private InscripcionesServicesService:InscripcionesServicesService,
  ) {
    this.InscripcionesServicesService.obtenerInscripciones()
      .subscribe((inscripciones) => {
        this.dataSource.data = inscripciones;
      })
  }

  irAlDetalle(inscripcionesId: number): void {
    this.router.navigate([inscripcionesId], {
      relativeTo: this.activatedRoute,
    });
  }

  crearInscripcion(): void {
    const dialog = this.matDialog.open(AbmInscripcionesComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,

          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }


  eliminarInscripciones(inscripcionParaEliminar: Inscripciones): void {
    this.dataSource.data = this.dataSource.data.filter(
      (inscripcionActual) => inscripcionActual.id !== inscripcionParaEliminar.id,
    );
  }

  editarInscripcion(inscripcionParaEditar: Inscripciones): void {
    const dialog = this.matDialog.open(AbmInscripcionesComponent, {
      data: {
        inscripcionParaEditar
      }
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.dataSource.data = this.dataSource.data.map(
          (inscripcionActual) => inscripcionActual.id === inscripcionParaEditar.id
            ? ({ ...inscripcionActual, ...valorDelFormulario})
            : inscripcionActual,
        );
      }
    })
  }
}

