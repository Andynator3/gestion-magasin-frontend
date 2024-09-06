import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-customer-supplier-order',
  templateUrl: './new-customer-supplier-order.component.html',
  styleUrls: ['./new-customer-supplier-order.component.scss']
})
export class NewCustomerSupplierOrderComponent implements OnInit{

  origin: any = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

}
