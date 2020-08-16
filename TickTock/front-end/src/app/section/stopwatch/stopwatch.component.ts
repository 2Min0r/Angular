import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';

  constructor(
    public PageToggleService: PageToggleService,
    private router: Router
   ) {
  }

  goclock(){
    this.PageToggleService.goPage('/clock');
  }

  startTime($event) {
    this.present = $event;
  }

  ngOnInit() { 

  }


}
