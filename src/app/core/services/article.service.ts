import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Article } from '../models';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private apiService: ApiService) { }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.id) {
      return this.apiService.put('/articles/' + article.id, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }

  getAll(): Observable<Article[]> {
    return this.apiService.get('/articles')
      .pipe(
        delay(1000),
        map(data => data)
      );
  }

  get(id): Observable<Article> {
    return this.apiService.get('/articles/' + id)
      .pipe(map(data => data));
  }

  edit(id): Observable<Article> {
    return this.apiService.get('/articles/' + id)
      .pipe(map(data => data));
  }

  destroy(id) {
    return this.apiService.delete('/articles/' + id);
  }
}
