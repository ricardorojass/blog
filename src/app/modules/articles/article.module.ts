import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../../shared';
import { ArticleComponent } from './pages/show/show.component';
import { ArticleResolver } from './article-resolver.service';
import { EditComponent } from './pages/edit/edit.component';
import { EditResolver } from './pages/edit/edit-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [ArticleComponent, EditComponent],
  providers: [
    ArticleResolver,
    EditResolver,
  ]
})
export class ArticleModule { }
