import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEquipmentComponent } from './details-equipment.component';

describe('DetailsEquipmentComponent', () => {
  let component: DetailsEquipmentComponent;
  let fixture: ComponentFixture<DetailsEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
