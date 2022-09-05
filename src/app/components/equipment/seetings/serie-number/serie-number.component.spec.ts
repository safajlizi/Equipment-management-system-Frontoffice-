import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNumberComponent } from './serie-number.component';

describe('SerieNumberComponent', () => {
  let component: SerieNumberComponent;
  let fixture: ComponentFixture<SerieNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
