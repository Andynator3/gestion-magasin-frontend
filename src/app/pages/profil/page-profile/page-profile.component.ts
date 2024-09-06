import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent implements OnInit{

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changePassword() : void {
   this.router.navigate(['change-password']);
  }
}
