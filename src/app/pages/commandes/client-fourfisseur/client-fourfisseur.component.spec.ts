import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFourfisseurComponent } from './client-fourfisseur.component';

describe('ClientFourfisseurComponent', () => {
  let component: ClientFourfisseurComponent;
  let fixture: ComponentFixture<ClientFourfisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFourfisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFourfisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
