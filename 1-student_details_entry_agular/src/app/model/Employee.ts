export class Employee{
    name: string;
    email: string;
    age: Number;
    gender: string;
    mobile: Number;
    state: string;
    password: string;
    // constructor(name: string, email: string, age: Number, gender: string, mobile: Number, state: string, password: string)
    // {
    //     this.name = name;
    //     this.email = email;
    //     this.age = age;
    //     this.gender = gender;
    //     this.mobile = mobile;
    //     this.state = state;
    //     this.password = password;
    // }
    constructor()
    {
        this.name = '';
        this.email = '';
        this.age = 0;
        this.gender = ''
        this.mobile = 0;
        this.state = '';
        this.password = '';
    }
}