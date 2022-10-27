import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  @ViewChild('myForm') myForm: any | undefined;
  constructor() {}

  ngOnInit(): void {
    let obj = {
      firstName: 'Sachin',
      lastName: 'Tendulkar',
      email: 'sachin@gmail.com',
      address: {
        city: 'Mumbai',
        street: 'Perry Cross Rd',
        pincode: '400050',
      },
    };

    setTimeout(() => {
      this.myForm.setValue(obj);
    });
  }

  submitMyForm(formData: any) {
    console.log(formData);
  }
  updatelastName() {
    console.log(this.myForm);
    this.myForm.controls['lastName'].setValue('aaaaaaaaaaaaa');
  }
  clearMyForm(myForm:any) {
    myForm.reset();
  }
}
