import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCrecheComponent } from './detalhe-creche.component';

describe('DetalheCrecheComponent', () => {
  let component: DetalheCrecheComponent;
  let fixture: ComponentFixture<DetalheCrecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheCrecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCrecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
