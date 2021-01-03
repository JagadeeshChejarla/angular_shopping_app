import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatailersigninComponent } from './reatailersignin.component';

describe('ReatailersigninComponent', () => {
  let component: ReatailersigninComponent;
  let fixture: ComponentFixture<ReatailersigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReatailersigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatailersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
