import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myLogin!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('userInfo');
    const myInfo = JSON.parse(data);
    if (myInfo) {
      console.log('userdata', myInfo.name);
    }
    this.myLogin = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  submit() {
    console.log('login', this.myLogin.controls.password.valid);

    if (this.myLogin.valid) {
      const res: any = localStorage.getItem('userInfo');
      const userInfo: any = JSON.parse(res);
      if (userInfo) {
        if (userInfo.email == this.myLogin.value.email) {
          if (userInfo.password == this.myLogin.value.password) {
            localStorage.setItem('x-auth', 'success');
            this.router.navigateByUrl('/dashboard');
          }
        }
      }
    } else {
      alert('Please enter your email id & password');
    }
  }
}
