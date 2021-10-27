import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonServiceService } from '../provider/common-service/common-service.service';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss'],
})
export class FormExampleComponent implements OnInit {
  myForm!: FormGroup;
  list: any = [];
  city: any = '';
  constructor(private fb: FormBuilder, private service: CommonServiceService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phoneNo: '',
    });
    this.getInformation();
  }

  getInformation() {
    this.service
      .getInfo()
      .then((res) => {
        console.log('response from api', res);
        if (res) {
          this.list = res;
        }
      })
      .catch((err) => {
        console.log('err', err);
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
