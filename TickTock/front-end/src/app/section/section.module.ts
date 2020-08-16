import { PageToggleService } from '../share/page-toggle.service';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { ClockComponent } from './clock/clock.component';
import { HomeComponent } from './home/home.component';

  const routes : Routes = [
    {
      path : 'stopwatch',
      component: StopwatchComponent
    },
    {
      path : 'clock',
      component: ClockComponent
    },
    {
      path : 'home',
      component: HomeComponent
    }
  ]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
    HomeComponent
  ],

  exports: [
    SectionComponent,
    RouterModule
  ],
  
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ],

  providers : [
    PageToggleService 
  ]
})
export class SectionModule { }
