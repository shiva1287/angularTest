import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css'],
})
export class ForkjoinComponent implements OnInit {
  finaldata: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchDetails();
  }
  fetchDetails() {
    let observable1 = this.httpClient.get(
      'https://api.github.com/users/sanjaysamantra1'
    );
    let observable2 = this.httpClient.get(
      'https://api.github.com/users/iliakan' //3
    );

    forkJoin([observable1, observable2]).subscribe((responseArr: any) => {
      console.log(responseArr);
      this.finaldata = responseArr;
    });

    // observable1.subscribe((response1: any) => {
    //   observable2.subscribe((response2: any) => {
    //     this.finaldata.push(response1, response2);
    //   });
    // });
  }
}
