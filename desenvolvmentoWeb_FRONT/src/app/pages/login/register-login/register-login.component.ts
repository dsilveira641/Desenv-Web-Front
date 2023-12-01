import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent {

  constructor(public router: Router) { 
  }

  public goToLogin() {
    this.router.navigate(['/']);
  }
}
