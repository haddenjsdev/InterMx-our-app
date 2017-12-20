import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEmailsComponent } from './recent-emails.component';

describe('RecentEmailsComponent', () => {
  let component: RecentEmailsComponent;
  let fixture: ComponentFixture<RecentEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
