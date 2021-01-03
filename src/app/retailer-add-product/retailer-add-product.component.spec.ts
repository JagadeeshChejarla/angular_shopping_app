import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerAddProductComponent } from './retailer-add-product.component';

describe('RetailerAddProductComponent', () => {
  let component: RetailerAddProductComponent;
  let fixture: ComponentFixture<RetailerAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
