import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupplierOrderDetailsComponent } from './customer-supplier-order-details.component';

describe('CustomerSupplierOrderDetailsComponent', () => {
  let component: CustomerSupplierOrderDetailsComponent;
  let fixture: ComponentFixture<CustomerSupplierOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupplierOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSupplierOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
