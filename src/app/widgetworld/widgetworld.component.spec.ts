import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetworldComponent } from './widgetworld.component';

describe('WidgetworldComponent', () => {
  let component: WidgetworldComponent;
  let fixture: ComponentFixture<WidgetworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
