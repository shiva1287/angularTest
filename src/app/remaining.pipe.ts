import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure: false,
})
export class RemainingPipe implements PipeTransform {
  transform(input: string,...args:any): unknown {
    return 200 - input.length;
  }
}
