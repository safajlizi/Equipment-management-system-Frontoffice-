import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMembersRootComponent } from './project-members-root.component';

describe('ProjectMembersRootComponent', () => {
  let component: ProjectMembersRootComponent;
  let fixture: ComponentFixture<ProjectMembersRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMembersRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMembersRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
