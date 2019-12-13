import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayPictureComponent } from './stay-picture.component';

describe('StayPictureComponent', () => {
  let component: StayPictureComponent;
  let fixture: ComponentFixture<StayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
