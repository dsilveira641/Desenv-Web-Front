import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public userLogin = {
    USR_UserName: null,
    USR_Password: null
  };

  constructor(
    public router: Router,
    public service: LoginService,
    private matDialog: MatDialog
  ) {}

  public goToHome() {
    this.router.navigate(['home'], { replaceUrl: true });
  }

  public sendLoginData() {
    this.service.save(this.userLogin).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        this.goToHome();
      },
      error: (error) => {
        
      }
    });
  }
}
