import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/core/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from 'src/app/core/services';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  article: Article = {} as Article;
  form: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    this.route.data.subscribe((data: { article: Article }) => {
      if (data.article) {
        this.article = data.article;
        this.form.patchValue(data.article);
      }
    });
  }

  createForm(): void {
    this.form = this.fb.group({
      title: '',
      body: '',
    });
  }

  submitForm(): void {
    this.isSubmitting = true;

    // Update the model
    this.updateArticle(this.form.value);

    // Post the changes
    this.articlesService.save(this.article).subscribe(
      article => {
        // this.router.navigateByUrl('article/' + article._id);
      console.log(this.article);
      },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateArticle(values: Object): void {
    Object.assign(this.article, values);
  }

  onChange(value: any): void {
    this.updateArticle(value);
  }
}
