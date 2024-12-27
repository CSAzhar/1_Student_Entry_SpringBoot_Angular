import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../model/Student';
import { StudentDb } from '../model/StudentDb';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url: string = "http://localhost:9090/student/";

  constructor(private client: HttpClient) { }

  saveStudent(student: StudentDb){
    return this.client.post(this.url+'save', student);
  }

  

}
