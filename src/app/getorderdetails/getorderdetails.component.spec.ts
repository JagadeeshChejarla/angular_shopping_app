import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorderdetailsComponent } from './getorderdetails.component';

describe('GetorderdetailsComponent', () => {
  let component: GetorderdetailsComponent;
  let fixture: ComponentFixture<GetorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetorderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
