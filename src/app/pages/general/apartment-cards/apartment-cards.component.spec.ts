import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCardsComponent } from './apartment-cards.component';

describe('ApartmentCardsComponent', () => {
  let component: ApartmentCardsComponent;
  let fixture: ComponentFixture<ApartmentCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
