import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  myTeacher!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // getting data from local storage
    // const res: any = localStorage.getItem('userInfo');
    //const userInfo = JSON.parse(res);
    //console.log('userdata', userInfo.website);
    this.myTeacher = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      exp: ['', Validators.required],
      lang: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      website: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }

  save() {
    console.log('tech', this.myTeacher.controls.website.valid);
    localStorage.removeItem('userInfo');
    if (this.myTeacher.valid) {
      alert('Name' + this.myTeacher.value.name);
    } else {
      alert('Please fill required fields');
    }
  }
}
