import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  flag: boolean = false;
  toggleFlag() {
    this.flag = !this.flag;
  }

  n: number = 5;
  cars: string[] = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, cars: ['tata', 'honda'] },
    { eId: 104, name: 'deepak', sal: 8000, cars: [] },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];
}
