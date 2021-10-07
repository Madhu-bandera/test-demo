import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss'],
})
export class FormExampleComponent implements OnInit {
  myForm!: FormGroup;

  city: any = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phoneNo: '',
    });
  }
  submit() {
    console.log('form', this.myForm.value);
    // local stirage stores only string data
    // setting data to local storage
    // local staorage for entire window
    localStorage.setItem('userInfo', JSON.stringify(this.myForm.value));
    // session storage only for single tab
    sessionStorage.setItem('name', 'madhu');
    if (this.city.length > 0) {
      alert('City ' + this.city);
    }
    // if (this.myForm.valid) {
    //   alert('Name' + this.myForm.value);
    // } else {
    //   alert('Please fill required fields');
    // }
  }
}
