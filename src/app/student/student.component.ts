import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


 @Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

myStudent!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myStudent=this.fb.group({
      name:["",Validators.required ],
      id:["",Validators.required],
      DOB:["",Validators.required],
      Email:["",Validators.required],
      Phone:["",Validators.required],
      Class:["",Validators.required],
      Address:["",Validators.required],
      State:["",Validators.required],
      pincode:["",Validators.required],


    })
  }

  Save(){
    console.log("form",this.myStudent.value)
    if(this.myStudent.valid){
      alert("Name"+this.myStudent.value)
    }
    else{
      alert("Please fill required fields")
    }
  }
}