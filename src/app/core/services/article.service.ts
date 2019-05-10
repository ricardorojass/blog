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
    if (article._id) {
      return this.apiService.patch(`stories/${article._id}`, {article: article})
        .pipe(map(data => data));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('stories', {article: article})
        .pipe(map(data => data));
    }
  }

  getAll(): Observable<Article[]> {
    return this.apiService.get('stories')
      .pipe(
        delay(1000),
        map(data => data.stories)
      );
  }

  get(id): Observable<Article> {
    return this.apiService.get('stories/' + id)
      .pipe(map(data => data));
  }

  destroy(id) {
    return this.apiService.delete('articles/' + id);
  }
}
