import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordPortfolioComponent } from './landlord-portfolio.component';

describe('LandlordPortfolioComponent', () => {
  let component: LandlordPortfolioComponent;
  let fixture: ComponentFixture<LandlordPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
