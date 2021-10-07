import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myLogin!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('myInfo');
    const myInfo = JSON.parse(data);
    console.log('userdata', myInfo.email);
    this.myLogin = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }
  submit() {
    console.log('login', this.myLogin.controls.password.valid);

    if (this.myLogin.valid) {
      alert('Email :' + this.myLogin.value.email);
    } else {
      alert('Please enter email id & password');
    }
  }
}
