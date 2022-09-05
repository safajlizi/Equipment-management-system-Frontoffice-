import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCategoryComponent } from './setting-category.component';

describe('SettingCategoryComponent', () => {
  let component: SettingCategoryComponent;
  let fixture: ComponentFixture<SettingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
