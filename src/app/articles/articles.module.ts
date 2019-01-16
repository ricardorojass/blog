import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [ArticleListComponent]
})
export class ArticlesModule { }
