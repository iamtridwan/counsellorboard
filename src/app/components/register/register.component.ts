import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isValid = true;
  isPassword = true;

  userSetting: UserRegister = {
    name: '',
    email: '',
    phone: '',
    profession: '',
    bio: '',
    image: '',
    password: '',
    confirmPassword: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.userSetting.password !== this.userSetting.confirmPassword) {
      this.isPassword = !this.isPassword;
    }
    if (
      form.valid &&
      this.userSetting.password === this.userSetting.confirmPassword
    ) {
      this.isValid = !this.isValid;
      this.isPassword = !this.isPassword;
      this.router.navigate(['/dashboard']);
    } else {
      this.isValid = !this.isValid;
      this.isPassword = !this.isPassword;
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }
}
             