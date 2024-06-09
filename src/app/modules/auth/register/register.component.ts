import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren, inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormGroup, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { GenericValidator } from '../../shared/validators/forms-error-validator';
import { ValidationModel } from '../../shared/validators/validation.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'matific-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, AfterViewInit {


  registerForm: FormGroup;
  isFormSubmitted = false;
  userModel = new UserModel();
  validationModel: ValidationModel = new ValidationModel();

  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  constructor() {
    this.validationModel.validationMessages = {
      firstName: {
        required: 'First Name is required',
      },
      lastName: {
        required: 'Last Name is required',
      },
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
    this.createRegistrationForm();
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(this.registerForm.valueChanges, ...controlBlurs).subscribe(() => {
      this.validate();
    });
  }

  validate(): void {
    this.validationModel.displayMessage = this.validationModel.formsErrorValidator.processMessages(this.registerForm, this.isFormSubmitted);
  }

  createRegistrationForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    this.isFormSubmitted = true;
    this.validate();
    if (this.registerForm.invalid) { return; }

    this.userModel = Object.assign({}, this.userModel, this.registerForm.value);
    this.authService.addToUsers(this.userModel);

    this.router.navigate(['login']);
  }
}
