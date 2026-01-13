import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    // TEMP demo logic (replace with API later)
    if (this.email === 'admin@gmail.com' && this.password === '1234') {

      localStorage.setItem('token', 'demo-jwt-token');
      this.router.navigate(['/dashboard']);

    } else {
      alert('Invalid credentials');
    }
  }
}
