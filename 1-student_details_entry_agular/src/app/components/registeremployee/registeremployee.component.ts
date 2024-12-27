import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../model/Employee';
import { EmployeeRegisterService } from '../../services/employee-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeremployee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './registeremployee.component.html',
  styleUrl: './registeremployee.component.css'
})
export class RegisteremployeeComponent {

  empObj: Employee = new Employee();

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl( this.empObj.name, [Validators.required, Validators.minLength(4) ] ),
    email: new FormControl(this.empObj.email, [Validators.required, Validators.email] ),
    age: new FormControl(this.empObj.age),
    gender: new FormControl(this.empObj.gender),
    mobile: new FormControl(this.empObj.gender),
    state: new FormControl(this.empObj.state),
    password: new FormControl(this.empObj.password),
    confirmPassword: new FormControl('')

  });

  constructor(private empService: EmployeeRegisterService, private router: Router){

  }

  user = {
    name: '',
    email: ''
  }

  empToSend: Employee = new Employee();

  onSubmit(){
    
    // console.log('checkingmm'+this.registrationForm.value.name);

    this.empToSend.name = this.registrationForm.value.name;
    this.empToSend.email = this.registrationForm.value.email;
    this.empToSend.age = this.registrationForm.value.age;
    this.empToSend.mobile = this.registrationForm.value.mobile;
    this.empToSend.gender = this.registrationForm.value.gender;
    this.empToSend.state = this.registrationForm.value.state;
    this.empToSend.password = this.registrationForm.value.password;

    // console.log('ob-='+this.empToSend.name);
    this.empService.saveEmployee(this.empToSend).subscribe( (data) => {
      // console.log(data);
      
      this.router.navigate( ['otp'], {queryParams: {name: this.user.name, email: this.user.email}} );
      
    });

  }

}
