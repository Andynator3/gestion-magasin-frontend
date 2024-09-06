import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newArticle() : void {
    this.router.navigate(['new-article']);
  }
}
