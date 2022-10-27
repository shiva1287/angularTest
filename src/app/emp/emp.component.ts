import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { MathService } from '../math.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers: [MathService],
})
export class EmpComponent implements OnInit {
  public employees: any[] = [];

  constructor(private empService: EmpService,public mathService: MathService) {}

  ngOnInit(): void {
    this.getAllEmps();
  }
  getAllEmps() {
    this.employees = this.empService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.empService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.empService.getFemaleEmployees();
  }
}
