import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
  email: any;
  emailRegx = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  constructor() {}

  ngOnInit(): void {}

  notify() {
    console.log('notify', this.email);
    if (this.emailRegx.test(this.email)) {
      alert('Email id ' + this.email);
    } else {
      alert('please enter vaild email id');
    }
  }
}
