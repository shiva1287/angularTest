import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name = 'saChIn tEnDulKaR';
  mySal = 5000;
  today = new Date();
  user = { name: 'sachin', age: 35, sal: 5000 };
  arr = [50, 10, 30, 20, 40];
  msg = '';
}
