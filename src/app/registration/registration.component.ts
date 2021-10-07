import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  myRegister!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myRegister = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      confpassword: [
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
    console.log('Reg data', this.myRegister.value);
    localStorage.setItem('myInfo', JSON.stringify(this.myRegister.value));
    sessionStorage.setItem('bandera', 'madhu');

    if (this.myRegister.valid) {
      alert(
        this.myRegister.value.password == this.myRegister.value.confpassword
      );
    }
    if (this.myRegister.invalid) {
      alert('please fill all fields');
    }
  }
}
