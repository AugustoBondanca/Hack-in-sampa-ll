import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCrecheComponent } from './lista-creche.component';

describe('ListaCrecheComponent', () => {
  let component: ListaCrecheComponent;
  let fixture: ComponentFixture<ListaCrecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCrecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCrecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
