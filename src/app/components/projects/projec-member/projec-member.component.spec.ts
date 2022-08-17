import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecMemberComponent } from './projec-member.component';

describe('ProjecMemberComponent', () => {
  let component: ProjecMemberComponent;
  let fixture: ComponentFixture<ProjecMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
