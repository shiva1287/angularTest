import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  private employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'reena', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'male' },
    { eId: 102, name: 'geeta', sal: 9000, gender: 'female' },
  ];
  public getAllEmployees() {
    return this.employees;
  }
  public getMaleEmployees() {
    return this.employees.filter((emp) => emp.gender === 'male');
  }
  public getFemaleEmployees() {
    return this.employees.filter((emp) => emp.gender === 'female');
  }
}
