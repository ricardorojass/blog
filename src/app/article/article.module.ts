import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
