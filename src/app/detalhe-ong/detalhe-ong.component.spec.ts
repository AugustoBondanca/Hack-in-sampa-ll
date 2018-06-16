import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheOngComponent } from './detalhe-ong.component';

describe('DetalheOngComponent', () => {
  let component: DetalheOngComponent;
  let fixture: ComponentFixture<DetalheOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
