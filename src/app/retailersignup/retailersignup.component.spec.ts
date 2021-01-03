import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersignupComponent } from './retailersignup.component';

describe('RetailersignupComponent', () => {
  let component: RetailersignupComponent;
  let fixture: ComponentFixture<RetailersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
