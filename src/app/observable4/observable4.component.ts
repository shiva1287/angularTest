import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable4',
  templateUrl: './observable4.component.html',
  styleUrls: ['./observable4.component.css'],
})
export class Observable4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let publisher1 = new AsyncSubject();
    publisher1.next('aaaaa');
    publisher1.next('bbbbb');
    let subscriber1 = publisher1.subscribe((data) => console.log('subscriber-1',data));
    publisher1.next('ccccc');
    publisher1.next('ddddd');
    let subscriber2 = publisher1.subscribe((data) => console.log('subscriber-2',data));
    publisher1.next('eeeee');
    let subscriber3 = publisher1.subscribe((data) => console.log('subscriber-3',data));
    publisher1.next('fffff');
    publisher1.complete();
  }
}
