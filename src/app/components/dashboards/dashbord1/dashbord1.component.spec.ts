import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbord1Component } from './dashbord1.component';

describe('Dashbord1Component', () => {
  let component: Dashbord1Component;
  let fixture: ComponentFixture<Dashbord1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashbord1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashbord1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
