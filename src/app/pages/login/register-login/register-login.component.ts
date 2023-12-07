import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent {

  public userData = {
    USR_UserName: null, 
    USR_Password: null,
    USR_Email: null
  }
  private destroy$ = new Subject();

  constructor(
    public router: Router,
    public service: UserService
  ) { 
  }

  public goToLogin() {
    this.router.navigate(['/']);
  }

  public createUser() {
    this.service
        .save(this.userData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.goToLogin();
          }
        });
  }
}
