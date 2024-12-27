import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private router: Router){

  }

  user: any = null;

  // name: string = '';
  // email: string = '';
  // phone: string = '';
  // age: number = 0;
  // state: string = '';
  // gender: string = '';
  
  ngOnInit(){
    let username = sessionStorage.getItem('username');
    
    if(username == null){
      alert('Unauthorized access');
      window.location.href = 'login';
    }else{
      const userData = localStorage.getItem('user');
      this.user = JSON.parse(userData);
    }



}
  

}
