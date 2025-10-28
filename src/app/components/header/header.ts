import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }


  navigateTo(path: string) { 
    this.router.navigate([path]);
  }

}
