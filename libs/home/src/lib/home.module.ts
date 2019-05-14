import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolverService } from './home-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent, resolve: { HomeResolverService }}
    ])
  ],
  declarations: [HomeComponent],
  providers: [HomeResolverService]
})
export class HomeModule {}
