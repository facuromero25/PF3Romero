import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmCursosComponent } from './abm-cursos.component';

describe('AbmCursosComponent', () => {
  let component: AbmCursosComponent;
  let fixture: ComponentFixture<AbmCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
