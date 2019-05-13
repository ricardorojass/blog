import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticleListComponent } from './artilcle-helpers';
import { ArticlePreviewComponent } from './artilcle-helpers/article-preview.component';
import { RouterModule } from '@angular/router';
import { ShowAuthedDirective } from './directives/show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticlePreviewComponent,
    ShowAuthedDirective,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ArticleListComponent,
    ArticlePreviewComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule { }
