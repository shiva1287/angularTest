import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { range, map, of, mergeMap, concatMap } from 'rxjs';

@Component({
  selector: 'app-mapdemo',
  templateUrl: './mapdemo.component.html',
  styleUrls: ['./mapdemo.component.css'],
})
export class MapdemoComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    let publisher1 = range(1, 10);
    let square = publisher1.pipe(map((ele) => ele * ele));
    let subscriber1 = square.subscribe((ele) => console.log(ele));

    // without mergeMap()
    /* let usersPublisher = of(1, 2, 3, 4);
    let usersSubscriber = usersPublisher.subscribe((user) => {
      console.log(user);
      const url = `https://jsonplaceholder.typicode.com/users/${user}`;
      this.httpClient.get(url).subscribe((userData) => {
        console.log(userData);
      });
    }); */

    //with mergeMap()
    let usersPublisher = of(1, 2, 3, 4);
    let usersSubscriber2 = usersPublisher
      .pipe(
        concatMap((user) => {
          const url = `https://jsonplaceholder.typicode.com/users/${user}`;
          return this.httpClient.get(url); //inner observable
        })
      ).subscribe((userData) => {
        console.log(userData);
      });
  }
}
