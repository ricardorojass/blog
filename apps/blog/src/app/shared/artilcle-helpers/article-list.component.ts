import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Article, ArticleService } from '../../core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.articlesService.getAll();
  }
}
