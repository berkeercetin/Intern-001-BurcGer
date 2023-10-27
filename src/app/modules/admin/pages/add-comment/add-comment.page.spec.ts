import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCommentPage } from './add-comment.page';

describe('AddCommentPage', () => {
  let component: AddCommentPage;
  let fixture: ComponentFixture<AddCommentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
