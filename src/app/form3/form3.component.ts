import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styles: [
    'input.ng-invalid.ng-dirty{border:2px solid red}'
  ]
})
export class Form3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitMyForm(user: any) {
    alert(`Name: ${user.name} Age: ${user.age}`);
  }
  user: any = { name: '', age: 44 };

}
