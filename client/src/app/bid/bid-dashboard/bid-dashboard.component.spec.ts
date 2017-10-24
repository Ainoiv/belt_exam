import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDashboardComponent } from './bid-dashboard.component';

describe('BidDashboardComponent', () => {
  let component: BidDashboardComponent;
  let fixture: ComponentFixture<BidDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
