import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFeedbackPage } from './app-feedback.page';

describe('AppFeedbackPage', () => {
  let component: AppFeedbackPage;
  let fixture: ComponentFixture<AppFeedbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
