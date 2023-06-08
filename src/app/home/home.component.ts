import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoggedIn = false;
  showConfirmation = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.showConfirmation = true; // Display the confirmation dialog
  }

  confirmLogout(choice: boolean) {
    if (choice) {
      localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
      this.isLoggedIn = false;
    }
    this.showConfirmation = false; // Hide the confirmation dialog
  }
}