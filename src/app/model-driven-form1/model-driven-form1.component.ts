import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form1',
  templateUrl: './model-driven-form1.component.html',
  styleUrls: ['./model-driven-form1.component.css'],
})
export class ModelDrivenForm1Component implements OnInit {
  registrationForm: any;

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('sachin', {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'change',
      }),
      lastName: new FormControl(' tendulkar'),
      email: new FormControl('sachin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      address: new FormGroup({
        street: new FormControl('marathahalli'),
        city: new FormControl('bangalore'),
        pin: new FormControl(560037),
      }),
    });
  }
}
