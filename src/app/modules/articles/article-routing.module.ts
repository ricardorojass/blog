import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/show/show.component';
import { ArticleResolver } from './article-resolver.service';
import { EditComponent } from './pages/edit/edit.component';
import { EditResolver } from './pages/edit/edit-resolver.service';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: ':id',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver,
    }
  },
  {
    path: ':id/edit',
    component: EditComponent,
    resolve: {
      article: EditResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
