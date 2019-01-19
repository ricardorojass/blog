import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { SharedModule } from '../shared';
import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ],
  declarations: [ArticleListComponent, ArticlesComponent]
})
export class ArticlesModule { }
