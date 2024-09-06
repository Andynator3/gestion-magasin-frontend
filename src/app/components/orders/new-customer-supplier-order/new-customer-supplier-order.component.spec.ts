import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerSupplierOrderComponent } from './new-customer-supplier-order.component';

describe('NewCustomerSupplierOrderComponent', () => {
  let component: NewCustomerSupplierOrderComponent;
  let fixture: ComponentFixture<NewCustomerSupplierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomerSupplierOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerSupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
