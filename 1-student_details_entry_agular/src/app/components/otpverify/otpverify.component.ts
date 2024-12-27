import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRegisterService } from '../../services/employee-register.service';

@Component({
  selector: 'app-otpverify',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './otpverify.component.html',
  styleUrl: './otpverify.component.css'
})
export class OtpverifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EmployeeRegisterService, private router: Router) { 

  }

  otpForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    otp: new FormControl('')
  });

  name: string ='';
  email: string = '';
  successLoginMessage: string = '';
  loginFailedMessage: string = '';
  verifyStatus: String = 'notchecked';

  ngOnInit(){

    this.name = this.route.snapshot.queryParams['name'];
    this.email = this.route.snapshot.queryParams['email'];
  }

  employee: any = null;

  verifyOtp(){
    
    let email = this.email
    let otp = this.otpForm.controls['otp'].value;
    console.log(this.otpForm.controls['otp'].value);


    this.service.verifyOtp(email, otp).subscribe( response => {
      this.employee = response;
      console.log(this.employee.status);
      if(this.employee.status == 'success')
        {
          alert('OTP verified successfully');
          this.successLoginMessage = this.employee.message;
          setTimeout( () => {
            this.router.navigate(['login']);
          }, 2000);

        }
        else
        {
          this.verifyStatus = 'failed';
          this.loginFailedMessage = 'Invalid OTP';
        }
      
      
    });
  }

}
