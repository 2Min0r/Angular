import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString
  now = true;

  constructor(
    public PageToggleService: PageToggleService,
    private router : Router
  ){
    interval(1000)
      .pipe(map(()=>{
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      }),
    interval(1000)
      .subscribe(data => {
        if(this.now == true){
          this.now = false;
        } else{
          this.now = true;
        }
      })
  }

  goStopwatch() {
    this.PageToggleService.goPage('/stopwatch');
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    
  }

}
