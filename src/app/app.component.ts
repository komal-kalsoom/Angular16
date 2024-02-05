import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HR-Management';
  // employeeForm (variable name) : FormGroup (variable type);
  employeeForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.setEmpForm();
  }

  setEmpForm() {
    this.employeeForm = this.fb.group({
      id: [0],
      department: ['', Validators.required],
      empName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      joinDate: ['', Validators.required],
      salary: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      empstatus: [false, Validators.requiredTrue],
    });
  }

  formSubmit() {
    console.log(this.employeeForm.value);
  }

  // getter function
  get f() {
    return this.employeeForm.controls;
  }
  // reset
  resetBtn() {
    this.employeeForm.reset();
  }
  //cancel
  cancelBtn() {
    this.employeeForm.reset();
  }
}
