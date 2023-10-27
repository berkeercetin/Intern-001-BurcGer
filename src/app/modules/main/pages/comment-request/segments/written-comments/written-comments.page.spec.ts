import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrittenCommentsPage } from './written-comments.page';

describe('WrittenCommentsPage', () => {
  let component: WrittenCommentsPage;
  let fixture: ComponentFixture<WrittenCommentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WrittenCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
