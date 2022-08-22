import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberMembersComponent } from './project-member-members.component';

describe('ProjectMemberMembersComponent', () => {
  let component: ProjectMemberMembersComponent;
  let fixture: ComponentFixture<ProjectMemberMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemberMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
