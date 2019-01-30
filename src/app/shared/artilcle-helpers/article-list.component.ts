import { Component, OnInit } from '@angular/core';

import { ArticleService } from 'src/app/core/services';
import { Article } from 'src/app/core/models';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  loading = false;
  articles: Article[];

  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.loading = true;
    this.articlesService.getAll()
      .subscribe(data => {
        console.log('data', data);

        this.loading = false;
        this.articles = data;
      });
  }

}
