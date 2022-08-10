import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmenthistoryComponent } from './equipmenthistory.component';

describe('EquipmenthistoryComponent', () => {
  let component: EquipmenthistoryComponent;
  let fixture: ComponentFixture<EquipmenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmenthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
