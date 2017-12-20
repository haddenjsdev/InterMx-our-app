import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMarketMapComponent } from './top-market-map.component';

describe('TopMarketMapComponent', () => {
  let component: TopMarketMapComponent;
  let fixture: ComponentFixture<TopMarketMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMarketMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMarketMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
