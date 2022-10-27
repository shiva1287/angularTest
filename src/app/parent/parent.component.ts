import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  b: number;

  @ViewChild('myInputBox') inputBox1: any;
  @ViewChildren('myInputBox') allinputBoxes: any;
  constructor() {
    this.b = 20;
    console.log('Parent constructor');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.inputBox1); //{nativeElement:value}
    this.inputBox1.nativeElement.focus();
    this.inputBox1.nativeElement.style.backgroundColor = 'green';

    console.log(this.allinputBoxes);

    this.allinputBoxes._results?.forEach((ele: any) => {
      ele.nativeElement.style.backgroundColor = 'green';
    });
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

  a = 10;
  name: any = '';

  receiveDataFromChild(data: any) {
    this.name = data;
  }
  cars = ['tata', 'honda', 'maruti'];
}
