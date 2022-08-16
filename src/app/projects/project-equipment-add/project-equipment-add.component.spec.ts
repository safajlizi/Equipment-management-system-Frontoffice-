import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentAddComponent } from './project-equipment-add.component';

describe('ProjectEquipmentAddComponent', () => {
  let component: ProjectEquipmentAddComponent;
  let fixture: ComponentFixture<ProjectEquipmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEquipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
