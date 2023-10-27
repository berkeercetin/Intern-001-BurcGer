import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentPanelPage } from './comment-panel.page';

describe('CommentPanelPage', () => {
  let component: CommentPanelPage;
  let fixture: ComponentFixture<CommentPanelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommentPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
