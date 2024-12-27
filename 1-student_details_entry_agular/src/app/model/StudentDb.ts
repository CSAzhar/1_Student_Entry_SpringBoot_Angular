export class StudentDb{

    name: string;
    email: string;
    contactNumber: number;
    gender: string;
    dob: Date;
    qualification: string;
   // skills: string[];
    pincode: number;
    state: string;
    city: string;
    address: string;

    constructor(){
        this.name = '';
        this.email = '';
        this.contactNumber = 0;
        this.gender = '';
        this.dob = new Date();
        this.qualification = '';
      //  this.skills = [];
        this.pincode = 0;
        this.state = '';
        this.city = '';
        this.address = '';


    }





}