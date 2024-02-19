import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentFeedbackPage } from './comment-feedback.page';

describe('CommentFeedbackPage', () => {
  let component: CommentFeedbackPage;
  let fixture: ComponentFixture<CommentFeedbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommentFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
