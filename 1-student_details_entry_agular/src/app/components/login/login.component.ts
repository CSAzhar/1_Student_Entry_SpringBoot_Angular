import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeRegisterService } from '../../services/employee-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: EmployeeRegisterService, private router: Router) { 

  }
  loginEmployee: any = null;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login(){

    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    this.service.loginService(email, password).subscribe( responseData => {
      this.loginEmployee = responseData;
      if(this.loginEmployee.loginStatus == 'success')
      {
        console.log(this.loginEmployee);
        alert('Login successful');
        sessionStorage.setItem('username', this.loginEmployee.email);
        localStorage.setItem('user', JSON.stringify(this.loginEmployee));
        console.log('data is'+ localStorage.getItem('user'));
        setTimeout( () => {
          this.router.navigate(['profile']);
        } , 2000);
        
      }
      else
      {
        console.log(this.loginEmployee);
        alert('Login failed');
      }

    });
  }

}
