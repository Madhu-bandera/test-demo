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
      dob:["",Validators.required],
      email:["",Validators.required],
      phone:["",Validators.required],
      class:["",Validators.required],
      address:["",Validators.required],
      state:["",Validators.required],
      pincode:["",Validators.required],


    })
  }

  Save(){
    console.log("form",this.myStudent.value)
    if(this.myStudent.valid){
      alert("Name"+this.myStudent.value.name)
    }
    else{
      alert("Please fill required fields")
    }
  }
}