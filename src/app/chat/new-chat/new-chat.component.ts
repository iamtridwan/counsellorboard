import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css'],
})
export class NewChatComponent implements OnInit {
  popUp: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showPopUp() {
    this.popUp = !this.popUp;
    setTimeout(() => {
      this.popUp = !this.popUp;
      this.router.navigate(['/chat/admin']);
    }, 1800);
  }
}
