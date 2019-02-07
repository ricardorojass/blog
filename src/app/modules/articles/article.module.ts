import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../../shared';
import { ArticleComponent } from './pages/show/show.component';
import { ArticleResolver } from './article-resolver.service';
import { EditComponent } from './pages/edit/edit.component';
import { EditResolver } from './pages/edit/edit-resolver.service';
import { MarkdownModule } from 'ngx-markdown';
import { FormComponent } from './components/form.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [ArticleComponent, EditComponent, FormComponent, NewComponent],
  providers: [
    ArticleResolver,
    EditResolver,
  ]
})
export class ArticleModule { }
