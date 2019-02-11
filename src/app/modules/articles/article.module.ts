import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../../shared';
import { ShowComponent } from './pages/show/show.component';
import { ShowResolver } from './pages/show/show-resolver.service';
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
  declarations: [ShowComponent, EditComponent, FormComponent, NewComponent],
  providers: [
    ShowResolver,
    EditResolver,
  ]
})
export class ArticleModule { }
