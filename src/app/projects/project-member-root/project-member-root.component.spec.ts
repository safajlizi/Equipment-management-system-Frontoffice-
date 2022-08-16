import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberRootComponent } from './project-member-root.component';

describe('ProjectMemberRootComponent', () => {
  let component: ProjectMemberRootComponent;
  let fixture: ComponentFixture<ProjectMemberRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemberRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
