import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouveStockComponent } from './mouve-stock.component';

describe('MouveStockComponent', () => {
  let component: MouveStockComponent;
  let fixture: ComponentFixture<MouveStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouveStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouveStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
