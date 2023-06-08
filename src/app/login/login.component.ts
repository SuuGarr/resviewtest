import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  email: string = '';
  password: string = '';
 
  isLogin: boolean = true;
  erroMessage: string = "";
 
  constructor(private router: Router,private http: HttpClient) {}
  //constructor(private http: HttpClient){}

 
  login() {
    console.log(this.email);
    console.log(this.password);

    if (!this.email || !this.password) {
      alert('Please enter your Email or Password');
      return;
    }
    
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post("http://localhost:9992/user/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.status)
        {
           alert("Login Successfully") 
           localStorage.setItem('isLoggedIn', 'true'); // add Store login status in local storage
           this.router.navigateByUrl('/home');
            //this.http.get('/home');
 
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
 
}  

/* import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    console.log(this.email);
    console.log(this.password);

    if (!this.email || !this.password) {
      alert('Please enter your Email or Password');
      return;
    }

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post<any>('http://localhost:9992/user/login', bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);

        if (resultData.status) {
          this.router.navigateByUrl('/home');
        } else {
          this.errorMessage = 'Incorrect Email or Password';
          console.log('Error login');
        }
      },
      (error: any) => {
        console.log(error);
        if (error && error.error && error.error.errors) {
          const validationErrors = Object.keys(error.error.errors).map(key => error.error.errors[key].message);
          this.errorMessage = validationErrors.join(', ');
        } else {
          this.errorMessage = 'An error occurred during login';
        }
      }
    );
  }
}


 */
