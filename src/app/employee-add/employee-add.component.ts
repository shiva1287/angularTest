import { Component, EventEmitter, OnInit } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  outputs:['addEmpEvent']
})
export class EmployeeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addEmpEvent=new EventEmitter();
  sendToEmpCrud(id:number,name:string,sal:number,gender:string){

    var emp= {
      eId:id,
      name:name,
      sal:sal,
      gender:gender

    };
    this.addEmpEvent.emit(emp);
  }

}
