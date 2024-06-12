import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVacaComponent } from './agregar-vaca.component';

describe('AgregarVacaComponent', () => {
  let component: AgregarVacaComponent;
  let fixture: ComponentFixture<AgregarVacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
