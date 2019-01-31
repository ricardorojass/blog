import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared';
import { ArticleComponent } from './article.component';
import { ArticleResolver } from './article-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [ArticleComponent],
  providers: [
    ArticleResolver
  ]
})
export class ArticleModule { }
