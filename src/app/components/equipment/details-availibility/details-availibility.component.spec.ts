import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAvailibilityComponent } from './details-availibility.component';

describe('DetailsAvailibilityComponent', () => {
  let component: DetailsAvailibilityComponent;
  let fixture: ComponentFixture<DetailsAvailibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAvailibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAvailibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
