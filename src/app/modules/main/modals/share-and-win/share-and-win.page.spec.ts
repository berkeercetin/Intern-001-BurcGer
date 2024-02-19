import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareAndWinPage } from './share-and-win.page';

describe('ShareAndWinPage', () => {
  let component: ShareAndWinPage;
  let fixture: ComponentFixture<ShareAndWinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShareAndWinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
