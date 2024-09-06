import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupplierOrderComponent } from './customer-supplier-order.component';

describe('CustomerSupplierOrderComponent', () => {
  let component: CustomerSupplierOrderComponent;
  let fixture: ComponentFixture<CustomerSupplierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupplierOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
