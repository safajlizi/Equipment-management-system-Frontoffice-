import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMatComponent } from './current-mat.component';

describe('CurrentMatComponent', () => {
  let component: CurrentMatComponent;
  let fixture: ComponentFixture<CurrentMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
