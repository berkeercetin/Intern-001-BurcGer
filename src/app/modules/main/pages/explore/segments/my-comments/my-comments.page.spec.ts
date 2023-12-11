import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCommentsPage } from './my-comments.page';

describe('MyCommentsPage', () => {
  let component: MyCommentsPage;
  let fixture: ComponentFixture<MyCommentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
