import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren, inject } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { ValidationModel } from '../../shared/validators/validation.model';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from '../../shared/validators/forms-error-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { appConstant } from '../../shared/app-constants';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'matific-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  isFormSubmitted = false;
  invalidCredentials = false;
  loginModel = new LoginModel();
  validationModel: ValidationModel = new ValidationModel();

  formBuilder = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor() {
    this.validationModel.validationMessages = {
      email: {
        required: 'Email is required',
      },
      password: {
        required: 'Password is required',
      },
    };
    this.validationModel.formsErrorValidator = new GenericValidator(this.validationModel.validationMessages);
  }


  ngOnInit() {
    this.createLoginForm();
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(this.loginForm.valueChanges, ...controlBlurs).subscribe(() => {
      this.validate();
    });
  }

  validate(): void {
    this.validationModel.displayMessage = this.validationModel.formsErrorValidator.processMessages(this.loginForm, this.isFormSubmitted);
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  authenticate() {
    this.isFormSubmitted = true;
    this.validate();
    if (this.loginForm.invalid) { return; }

    this.loginModel = Object.assign({}, this.loginModel, this.loginForm.value);
    let isAuthenticated = this.authService.authenticate(this.loginModel);

    if (isAuthenticated)
      this.router.navigate(['student-activity-report']);
    else
      this.invalidCredentials = true;
  }

}
