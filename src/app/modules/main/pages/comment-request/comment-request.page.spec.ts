import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentRequestPage } from './comment-request.page';

describe('CommentRequestPage', () => {
  let component: CommentRequestPage;
  let fixture: ComponentFixture<CommentRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommentRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
