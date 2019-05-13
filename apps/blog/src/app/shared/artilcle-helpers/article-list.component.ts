import { Component, OnInit } from '@angular/core';

import { ArticleService } from 'src/app/core/services';
import { Article } from 'src/app/core/models';
import { Observable } from 'rxjs';

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
