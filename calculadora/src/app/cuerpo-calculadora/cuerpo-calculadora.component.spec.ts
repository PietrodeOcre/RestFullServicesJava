import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoCalculadoraComponent } from './cuerpo-calculadora.component';

describe('CuerpoCalculadoraComponent', () => {
  let component: CuerpoCalculadoraComponent;
  let fixture: ComponentFixture<CuerpoCalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoCalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
