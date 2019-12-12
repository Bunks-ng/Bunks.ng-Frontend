import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostApartmentComponent } from './host-apartment.component';

describe('HostApartmentComponent', () => {
  let component: HostApartmentComponent;
  let fixture: ComponentFixture<HostApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
