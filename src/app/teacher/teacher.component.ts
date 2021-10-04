import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  myTeacher!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myTeacher=this.fb.group({
      name:["",Validators.required ],
      age:["",Validators.required ],
      email:["",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ],
      phone:["",Validators.required ],
      exp:["",Validators.required ],
      lang:["",Validators.required ],
      address:["",Validators.required ],
      state:["",Validators.required ],
      pincode:["",[Validators.required,Validators.maxLength(6)] ],
    
    })
  }

  Save(){
    console.log("form",this.myTeacher.controls.Email.valid )
    if(this.myTeacher.valid){
      alert("Name"+this.myTeacher.value.name)
    }
    else{
      alert("Please fill required fields")
    }
  }
}
