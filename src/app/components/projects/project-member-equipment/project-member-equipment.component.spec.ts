import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberEquipmentComponent } from './project-member-equipment.component';

describe('ProjectMemberEquipmentComponent', () => {
  let component: ProjectMemberEquipmentComponent;
  let fixture: ComponentFixture<ProjectMemberEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemberEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
