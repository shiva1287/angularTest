import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];

  getDataFromChild(data:any){
    this.employees.push(data);

  }

}
