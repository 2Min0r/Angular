import { PageToggleService } from 'src/app/share/page-toggle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present = 'welcome';
  commandText
  
  constructor(
    public PageToggleService: PageToggleService
  ) { }

  startTime($event) {
    this.present = $event;
    }

  ngOnInit(): void {
  }

}