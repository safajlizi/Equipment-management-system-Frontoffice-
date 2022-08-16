import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentListComponent } from './project-equipment-list.component';

describe('ProjectEquipmentListComponent', () => {
  let component: ProjectEquipmentListComponent;
  let fixture: ComponentFixture<ProjectEquipmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEquipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
