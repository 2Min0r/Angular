import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public PageToggleService: PageToggleService,
    private router: Router
  ) { }

  goHome() {
    this.PageToggleService.goPage('/home');
  }

  ngOnInit(): void {
  }

}
