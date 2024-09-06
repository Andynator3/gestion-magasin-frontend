import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newCategory() {
   this.router.navigate(['new-category']);
  }
}
