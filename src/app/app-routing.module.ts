import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: MainContentComponent },
      { path: 'about', component: AboutComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
