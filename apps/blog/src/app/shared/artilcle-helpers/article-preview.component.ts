import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../core/models/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
