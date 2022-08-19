import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProectReservedEquipmentComponent } from './proect-reserved-equipment.component';

describe('ProectReservedEquipmentComponent', () => {
  let component: ProectReservedEquipmentComponent;
  let fixture: ComponentFixture<ProectReservedEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProectReservedEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProectReservedEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
