import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css'],
})
export class MyloginComponent implements OnInit {
  @ViewChild('loginBtn') loginbtn: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let clicks = fromEvent(this.loginbtn.nativeElement, 'click');
    let result = clicks.pipe(
      exhaustMap(() =>
        this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      )
    );
    result.subscribe((data) => {
      console.log(data);
    });
  }
}
