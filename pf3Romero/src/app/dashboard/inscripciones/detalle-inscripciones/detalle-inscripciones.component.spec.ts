import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInscripcionesComponent } from './detalle-inscripciones.component';

describe('DetalleInscripcionesComponent', () => {
  let component: DetalleInscripcionesComponent;
  let fixture: ComponentFixture<DetalleInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
