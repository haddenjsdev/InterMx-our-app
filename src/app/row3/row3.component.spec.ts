import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Row3Component } from './row3.component';

describe('Row3Component', () => {
  let component: Row3Component;
  let fixture: ComponentFixture<Row3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Row3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
