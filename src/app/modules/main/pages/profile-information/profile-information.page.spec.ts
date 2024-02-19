import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileInformationPage } from './profile-information.page';

describe('ProfileInformationPage', () => {
  let component: ProfileInformationPage;
  let fixture: ComponentFixture<ProfileInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
