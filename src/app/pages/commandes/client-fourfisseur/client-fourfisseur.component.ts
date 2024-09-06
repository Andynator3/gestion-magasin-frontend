import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-fourfisseur',
  templateUrl: './client-fourfisseur.component.html',
  styleUrls: ['./client-fourfisseur.component.scss']
})
export class ClientFourfisseurComponent implements OnInit{

  origin: any = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }

  newOrder() : void {
    if (this.origin === 'client') {
      this.router.navigate(['new-customer-order']);
    }else if (this.origin === 'fournisseur') {
      this.router.navigate(['new-supplier-order']);
    }

  }
}
