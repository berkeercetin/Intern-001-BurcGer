import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingCommentsPage } from './pending-comments.page';

describe('PendingCommentsPage', () => {
  let component: PendingCommentsPage;
  let fixture: ComponentFixture<PendingCommentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendingCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
