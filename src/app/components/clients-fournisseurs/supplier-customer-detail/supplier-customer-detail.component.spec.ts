import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCustomerDetailComponent } from './supplier-customer-detail.component';

describe('SupplierCustomerDetailComponent', () => {
  let component: SupplierCustomerDetailComponent;
  let fixture: ComponentFixture<SupplierCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierCustomerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
