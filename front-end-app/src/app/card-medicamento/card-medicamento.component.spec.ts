import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMedicamentoComponent } from './card-medicamento.component';

describe('CardMedicamentoComponent', () => {
  let component: CardMedicamentoComponent;
  let fixture: ComponentFixture<CardMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
