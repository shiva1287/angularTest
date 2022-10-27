import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'sanjay';
  img_url: string =
    'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';

  flag: boolean = false;
  user: any = { name: 'sachin', age: 45, add: 'mumbai' };
  cars = ['tata', 'honda', 'maruti'];

  f1() {
    console.log('I am F1.....');
  }
  toggleFlag() {
    this.flag = !this.flag;
  }
  addition(a: number, b: number) {
    console.log('addition is ' + (a + b));
  }
  val1: number = 0;
}
