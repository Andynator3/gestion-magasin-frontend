import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouveStockDetailsComponent } from './mouve-stock-details.component';

describe('MouveStockDetailsComponent', () => {
  let component: MouveStockDetailsComponent;
  let fixture: ComponentFixture<MouveStockDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouveStockDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouveStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
