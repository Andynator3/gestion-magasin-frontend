import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerSupplierComponent } from './add-customer-supplier.component';

describe('AddCustomerSupplierComponent', () => {
  let component: AddCustomerSupplierComponent;
  let fixture: ComponentFixture<AddCustomerSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
