import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpi1Component } from './kpi1.component';

describe('Kpi1Component', () => {
  let component: Kpi1Component;
  let fixture: ComponentFixture<Kpi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kpi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kpi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
