import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public PageToggleService: PageToggleService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  goPage(target) {
    this.PageToggleService.goPage(target);
  }

}
