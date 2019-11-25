import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceStartComponent } from './experience-start.component';

describe('ExperienceStartComponent', () => {
  let component: ExperienceStartComponent;
  let fixture: ComponentFixture<ExperienceStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
