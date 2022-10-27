import {
  Component,
  OnInit,
  EventEmitter,
  OnChanges,
  DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { MathService } from '../math.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild1', 'cars'],
  outputs: ['eventObj1'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnInit, OnChanges {
  aChild1: any;
  name: string = 'sachin tendulkar';
  cars: any;

  eventObj1 = new EventEmitter();
  sendDataToParent() {
    this.eventObj1.emit(this.name);
  }

  constructor(
    private changedetectorObj: ChangeDetectorRef,
    private mathObj: MathService // Dependency Injection
  ) {
    console.log('child constructor');

    // let mathObj = new MathService();
    console.log(this.mathObj.add(5, 3));
    console.log(this.mathObj.sub(5, 3));
  }
  ngOnChanges(changes: any) {
    console.log('child ngOnChanges', changes);
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
    // this.changedetectorObj.markForCheck();
  }
  refresh() {
    this.changedetectorObj.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
