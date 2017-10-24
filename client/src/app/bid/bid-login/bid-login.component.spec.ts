import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidLoginComponent } from './bid-login.component';

describe('BidLoginComponent', () => {
  let component: BidLoginComponent;
  let fixture: ComponentFixture<BidLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
