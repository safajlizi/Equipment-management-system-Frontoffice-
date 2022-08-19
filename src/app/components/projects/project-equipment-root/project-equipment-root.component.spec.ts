import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEquipmentRootComponent } from './project-equipment-root.component';

describe('ProjectEquipmentRootComponent', () => {
  let component: ProjectEquipmentRootComponent;
  let fixture: ComponentFixture<ProjectEquipmentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEquipmentRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEquipmentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
