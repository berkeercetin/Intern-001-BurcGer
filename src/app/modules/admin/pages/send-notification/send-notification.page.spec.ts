import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendNotificationPage } from './send-notification.page';

describe('SendNotificationPage', () => {
  let component: SendNotificationPage;
  let fixture: ComponentFixture<SendNotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SendNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
