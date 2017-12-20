import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightCardsComponent } from './insight-cards.component';

describe('InsightCardsComponent', () => {
  let component: InsightCardsComponent;
  let fixture: ComponentFixture<InsightCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
