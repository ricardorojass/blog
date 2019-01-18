import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleListComponent } from './articles/components/article-list/article-list.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
