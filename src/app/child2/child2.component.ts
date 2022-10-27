import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  inputs: ['a', 'child1Ref'],
})
export class Child2Component implements OnInit {
  a: any;
  child1Ref: any;

  constructor(public mathObj: MathService) {}

  ngOnInit(): void {
    console.log(this.mathObj.add(10, 20));
  }
}
