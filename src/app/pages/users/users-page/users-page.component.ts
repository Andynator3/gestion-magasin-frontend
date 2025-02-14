import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newUser() : void {
    this.router.navigate(['new-user']);
  }
}
