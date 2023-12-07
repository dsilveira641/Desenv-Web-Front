import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserService } from 'src/app/services/user.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userData = {
    USR_UserName: null,
    USR_Email: null,
    USR_Password: null
  };

  public tableInfo: any = [];

  private destroy$ = new Subject();

  constructor(
    private service: LoginService,
    private dialog: MatDialog, 
    private userService: UserService,
    private dialogService: DialogService
  ) {

  }

  ngOnInit(): void {
    this.getData();
  }
  
  public sendLoginData() {
    this.userService.save(this.userData).subscribe({
      next: (response) => {
        this.getData();
      },
      error: (error) => {
        
      }
    });
  }

  private getData() {
    this.service
        .listAll()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.tableInfo = response;
          }
        });
  }

  delete(user: any) {    
    
    const confirmation = this.dialogService.confirmation("Deseja excluir ?");

    confirmation.afterClosed().subscribe((isConfirmed: boolean) => {
      this.userService
          .deleteUser(user.USR_Id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              this.getData();
            }
          })
    });
  }

  openDialog(event: any) {
    this.dialog.open(AddEditUserComponent, {
      height: '45vh',
      width: '70vw',
      data: {
        event
      }
    })
    .afterClosed()
    .subscribe({
      next: () => {
        this.getData();
      }
    });  
  }
}
