import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentAssignComponent } from './project-equipment-assign.component';

describe('ProjectEquipmentAssignComponent', () => {
  let component: ProjectEquipmentAssignComponent;
  let fixture: ComponentFixture<ProjectEquipmentAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEquipmentAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
