import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostHostelComponent } from './host-hostel.component';

describe('HostHostelComponent', () => {
  let component: HostHostelComponent;
  let fixture: ComponentFixture<HostHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
