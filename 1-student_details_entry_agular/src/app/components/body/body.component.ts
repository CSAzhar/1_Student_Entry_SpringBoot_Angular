import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../model/Student';
import { RouterOutlet } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';
import { StudentDb } from '../../model/StudentDb';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  qualification: string[] = ['B.Tech', 'M.Tech', 'Diploma', 'BCA', 'MBBS'];
  skills: string[] = ['Java', 'Python', 'MySQL', 'Angular','ReactJS', 'HTML']
  selectedSkills: string[] = [];
  states: string[] = ['Bihar', 'Karnataka', 'Gujarat', 'Bengal'];
  selectedState: string = '';

  studentForm: FormGroup;
  studentObject: Student = new Student();
  studentList: Student[] = [];

  constructor(private service: StudentServiceService){
    this.createForm();
    const oldData = localStorage.getItem('stdData');
    if( oldData != null )
      {
        const parseData = JSON.parse(oldData);
        this.studentList = parseData;
      }
  }

  createForm(){
    this.studentForm = new FormGroup({
      studentId: new FormControl(this.studentObject.studentId),
      name: new FormControl(this.studentObject.name),
      email: new FormControl(this.studentObject.email),
      contactNumber: new FormControl(this.studentObject.contactNumber),
      gender: new FormControl(this.studentObject.gender),
      dob: new FormControl(this.studentObject.dob),
      qualification: new FormControl(this.studentObject.qualification),
      state: new FormControl(this.studentObject.state),
      city: new FormControl(this.studentObject.city),
      pincode: new FormControl(this.studentObject.pincode),
      address: new FormControl(this.studentObject.address)

    });
  }

  onSubmit(){
    this.studentForm.addControl('isSavedToDatabase', new FormControl(false));
    this.studentForm.addControl('skills', new FormControl(this.selectedSkills));

    const oldData = localStorage.getItem('stdData');
    if(oldData != null)
      {
        const parseData = JSON.parse(oldData);
        this.studentForm.controls['studentId'].setValue(parseData.length+1);
        this.studentList.unshift(this.studentForm.value);
      }
      else
      {
        this.studentForm.controls['studentId'].setValue(1);
        this.studentList.unshift(this.studentForm.value);
      }
      localStorage.setItem('stdData', JSON.stringify(this.studentList));
      this.studentForm.reset();
      this.resetSkillsAndCheckBox();
      console.log(this.studentObject.studentId);
      

    
  }

  resetSkillsAndCheckBox()
  {
    this.selectedSkills.splice(0, this.selectedSkills.length); //removing selected item from skills
  }

  checkState(){
    // console.log(this.studentForm.controls['state'].value);
    // console.log(this.studentForm.controls['dob'].value);
    // console.log(this.studentForm.controls['qualification'].value);

  }

  resetLiveWorking()
  {
    const isConmfirmDelete = confirm('All Data will be Erased');
    if(isConmfirmDelete)
      {
        //localStorage.clear();
        localStorage.removeItem('stdData');
        this.studentList.splice(0, this.studentList.length)

      }
  }

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedSkills.push(value); // Add skill to the array
    } else {
      this.selectedSkills = this.selectedSkills.filter(skill => skill !== value); // Remove skill from the array
    }
  }

  resetForm(){

  }

  editForm(student: Student){
    this.studentObject = student;
    //console.log(this.studentObject.studentId);
    this.createForm();
  }

  onEditSubmit(){

    const record = this.studentList.find( m=> m.studentId == this.studentForm.controls['studentId'].value );
    if( record != undefined ){
      record.name = this.studentForm.controls['name'].value;
      record.email = this.studentForm.controls['email'].value;
      record.contactNumber = this.studentForm.controls['contactNumber'].value;
      record.gender = this.studentForm.controls['gender'].value;
      record.dob = this.studentForm.controls['dob'].value;
      record.address = this.studentForm.controls['address'].value;
      record.qualification = this.studentForm.controls['qualification'].value;
    }
    this.studentObject = new Student();
    this.studentForm.reset();

  }

  deleteFromList(student: Student){
      const isDelete = confirm("Do u Want to delete - "+student.name);
      const idx = this.studentList.findIndex( m => m.studentId == student.studentId );
      this.studentList.splice(idx, 1);
  }

  studentToSend: StudentDb;
  sendToDatabase(student: Student){
    const isSave = confirm(student.name+" - Details will be Save to Database");
    if(isSave)
      {
        const record = this.studentList.find( m=> m.studentId == student.studentId );
        record.isSavedToDatabase = true;
        this.studentToSend = new StudentDb();
        this.studentToSend.name = record.name;
        this.studentToSend.email = record.email;
        console.log(this.studentToSend.name);

        this.service.saveStudent(this.studentToSend).subscribe(
          r1 => {
            alert('Saved to Database');
          }
        );

      }

     // this.studentToSend = new Student();
    

  }



  



}
