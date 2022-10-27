import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css'],
})
export class Observable2Component implements OnInit {
  publisher1: any;
  subscriber1: any;

  responseData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    //publisher/ producer
    this.publisher1 = new Observable(function (publisher) {
      console.log('i am publishing first 2 data')
      publisher.next(['oneeeeeeee', 'twoooooooooo']); // 100 objects
      console.log('i am publishing next 2 data')
      publisher.next(['threeeeee', 'fourrrrrrr']);
      console.log('i am publishing final 1 data')
      publisher.next(['fiveeeeeeee']);
      publisher.complete();
    });

    // consumer
    this.subscriber1 = this.publisher1.subscribe({
      next: (response: any) => {
        console.count('next called');
        console.log(response)
        this.responseData = this.responseData.concat(response);
        console.log(this.responseData)
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('final data has reached');
      },
    });



  }
}
