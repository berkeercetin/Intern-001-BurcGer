import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCommentPage } from './edit-comment.page';

describe('EditCommentPage', () => {
  let component: EditCommentPage;
  let fixture: ComponentFixture<EditCommentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
