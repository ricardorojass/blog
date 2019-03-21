import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    this.userService.attemptAuth(credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

}
