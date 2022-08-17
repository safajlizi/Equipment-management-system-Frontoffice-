import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberAddComponent } from './project-member-add.component';

describe('ProjectMemberAddComponent', () => {
  let component: ProjectMemberAddComponent;
  let fixture: ComponentFixture<ProjectMemberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemberAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
