import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.component.html',
  styleUrls: ['./redefine-password.component.scss']
})
export class RedefinePasswordComponent {
  constructor(public router: Router) { 
  }

  public goToLogin() {
    this.router.navigate(['/']);
  }
}
