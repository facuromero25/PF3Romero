import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbmAlumnosComponent } from './abm-alumnos.component';

describe('AbmAlumnosComponent', () => {
  let component: AbmAlumnosComponent;
  let fixture: ComponentFixture<AbmAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmAlumnosComponent ],
      imports:[

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('si el campo nombre esta vacio el formcontrol del nombre debe ser invalido', () =>{
    component.alumnosForm.setValue({
      nombre: null,
      apellido: null
    })
    expect(component.nombreControl.invalid).toBeTrue();
  });

  it('Si el campo apellido esta vacio el FormControl del apellido debe ser invalido', () => {
    component.alumnosForm.setValue({
      apellido: null,
      nombre: null
    })
    expect(component.apellidoControl.invalid).toBeTrue();
  });

});
