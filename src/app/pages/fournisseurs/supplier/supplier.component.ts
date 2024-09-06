import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  newSupplier() : void {
    this.router.navigate(['add-supplier'])
  }
}
