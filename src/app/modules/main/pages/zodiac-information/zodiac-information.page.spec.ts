import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacInformationPage } from './zodiac-information.page';

describe('ZodiacInformationPage', () => {
  let component: ZodiacInformationPage;
  let fixture: ComponentFixture<ZodiacInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZodiacInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
