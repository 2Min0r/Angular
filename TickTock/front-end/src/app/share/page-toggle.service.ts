import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PageToggleService {

  target

  constructor(
    private router : Router
  ) { }

  goPage(target){
    this.router.navigateByUrl(target);
  }
}
