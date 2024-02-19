import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatorsPage } from './creators.page';

describe('CreatorsPage', () => {
  let component: CreatorsPage;
  let fixture: ComponentFixture<CreatorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
