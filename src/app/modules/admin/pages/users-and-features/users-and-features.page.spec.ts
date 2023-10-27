import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersAndFeaturesPage } from './users-and-features.page';

describe('UsersAndFeaturesPage', () => {
  let component: UsersAndFeaturesPage;
  let fixture: ComponentFixture<UsersAndFeaturesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsersAndFeaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
