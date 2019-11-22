import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSpacesComponent } from './apartment-spaces.component';

describe('ApartmentSpacesComponent', () => {
  let component: ApartmentSpacesComponent;
  let fixture: ComponentFixture<ApartmentSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
