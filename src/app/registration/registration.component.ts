import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  myRegister!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myRegister = this.fb.group({
      name: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
      confPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
    });
  }

  submit() {
    if (this.myRegister.valid) {
      if (
        this.myRegister.value.password == this.myRegister.value.confPassword
      ) {
        alert('registration success');
        console.log('Reg data', this.myRegister.value);
        localStorage.setItem('userInfo', JSON.stringify(this.myRegister.value));
        sessionStorage.setItem('bandera', 'madhu');
        this.router.navigateByUrl('/login');
      } else {
        alert('Password mismatch');
      }
    } else {
      alert('please fill all fields');
    }
  }
}

//if(this.myRegister.valid) {
//alert(
//this.myRegister.value.password == this.myRegister.value.confpassword
//);
//}
//if (this.myRegister.invalid) {
//  alert('please fill all fields');
