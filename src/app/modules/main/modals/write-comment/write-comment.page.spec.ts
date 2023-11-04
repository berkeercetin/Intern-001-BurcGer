import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WriteCommentPage } from './write-comment.page';

describe('WriteCommentPage', () => {
  let component: WriteCommentPage;
  let fixture: ComponentFixture<WriteCommentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WriteCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
