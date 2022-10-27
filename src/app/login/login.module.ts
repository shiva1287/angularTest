import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { MathService } from '../math.service';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule],
  exports: [DemoComponent],
  providers:[MathService]
})
export class LoginModule {}
