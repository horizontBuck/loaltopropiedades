import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.scss',
})
export class Properties {
  constructor(private router: Router) {}
  
 navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
