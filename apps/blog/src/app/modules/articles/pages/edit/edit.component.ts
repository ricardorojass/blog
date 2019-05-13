import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Article } from 'apps/blog/src/app/core/models/article.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  article: Article;
  editForm: FormGroup;
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );
  }

  createForm(): void {
    this.editForm = this.fb.group({
      title: ['', Validators.required ],
      body: ['', Validators.required ]
   });
  }

  submitForm(): void {
    this.isSubmitting = true;
    of(1).pipe(
      delay(4000)
    ).subscribe((x) => {
      this.isSubmitting = false;
    });

  }

}
