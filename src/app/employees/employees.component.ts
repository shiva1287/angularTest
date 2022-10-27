import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor(public mathService: MathService) {}

  ngOnInit(): void {}

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];

  addNewEmp() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000 },
      { eId: 104, name: 'deepak', sal: 8000 },
      { eId: 103, name: 'ranjan', sal: 7000 },
      { eId: 102, name: 'manoj2', sal: 9000 },
      // { eId: 105, name: 'ganesh', sal: 4000 },
    ];
  }
  trackByEmpId(employee: any) {
    return employee.eId;
  }
}
