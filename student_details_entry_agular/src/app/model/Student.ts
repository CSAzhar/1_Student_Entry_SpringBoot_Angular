export class Student{

    studentId: number;
    name: string;
    email: string;
    contactNumber: number;
    gender: string;
    dob: Date;
    qualification: string;
    skills: string[];
    pincode: number;
    state: string;
    city: string;
    address: string;
   // profilePic: Blob;
    isSavedToDatabase: boolean;

    constructor(){
        this.studentId = 0;
        this.name = '';
        this.email = '';
        this.contactNumber = 0;
        this.gender = '';
        this.dob = new Date();
        this.qualification = '';
        this.skills = [];
        this.pincode = 0;
        this.state = '';
        this.city = '';
        this.address = '';
       // this.profilePic = 
       this.isSavedToDatabase = false;


    }





}