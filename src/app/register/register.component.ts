//ori code
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  errorMessage: string = ""; //add

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  //เพิ่ม checkmail
  checkEmail(){
    let bodyData = { email : this.email};

    this.http.post('http://localhost:9992/user/check-email',bodyData).subscribe((resultData:any) =>{
      if (!resultData.status) { 
        alert('Email already exists. Please use another email');
        this.errorMessage = resultData.message;
       
      } else {
        this.errorMessage = '';
      }
    });
  }
  register() {
    let bodyData =
    {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
    };
    if (!this.firstname) {
      alert('Please enter a firstname');
      return;
    }

    if (!this.lastname) {
      alert('Please enter a lastname');
      return;
    }

    if (!this.email) {
      alert('Please enter an email');
      return;
    }

    if (!this.password) {
      alert('Please enter a password');
      return;
    }
    /*  this.http.post("http://localhost:9992/user/create",bodyData).subscribe((resultData: any)=>{
         console.log(resultData);
         alert("user Registered Successfully")
     });
   }
   */
    this.http.post("http://localhost:9992/user/create", bodyData).subscribe((resultData: any) => {

      if (resultData.status) {
        alert('User Registered Successfully');
        this.router.navigateByUrl('/home');
      } else {
        alert('Email already exists. Please use another email');
      }
    });
  }

  save() {
    this.register();
  }

}
