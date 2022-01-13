import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
})
export class SplashComponent implements OnInit {
  setBg: boolean = false;
  show: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.changeBg();
    this.changeScreen();
  }

  // change bg
  changeBg() {
    setTimeout(() => {
      this.setBg = !this.setBg;
    }, 1000);
  }

  // // change to main screen
  changeScreen() {
    setTimeout(() => {
      this.show = !this.show;
      this.router.navigate(['/login']);
    }, 3500);
  }
} 
