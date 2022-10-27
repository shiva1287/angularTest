import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  constructor() {}
  public name: string = 'NareshIT';

  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
}
