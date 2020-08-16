import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { TimeDisplayComponent } from './time-display/time-display.component';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],
  exports: [
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  ]
})
export class StopwatchModule { }
