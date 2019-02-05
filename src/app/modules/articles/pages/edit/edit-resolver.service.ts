import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Article } from '../../../../core/models';
import { ArticleService } from '../../../../core/services';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EditResolver implements Resolve<Article> {

  constructor(
    private articlesService: ArticleService,
    private router: Router
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.articlesService.edit(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
