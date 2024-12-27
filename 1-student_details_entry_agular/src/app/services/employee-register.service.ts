import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegisterService {

  url: string = 'http://localhost:9090/employee/';

  constructor(private client: HttpClient) { }

  saveEmployee(employee: Employee){
    console.log('service='+employee.name);
    return this.client.post<Employee>(this.url + 'saveEmployee', employee);
  }

  verifyOtp(email: string, otp: string){
    return this.client.post(this.url + 'verifyOtp', { email, otp });
  }

  loginService(email: string, password: string){
    return this.client.post(this.url + 'login', {email, password});

  }

}
