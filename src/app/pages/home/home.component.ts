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

  delete() {
    const confirmation = this.dialogService.confirmation("Mil meu comil teu");

    confirmation.afterClosed().subscribe((isConfirmed: boolean) => {

    });
  }

  openDialog(event: any) {
    this.dialog.open(AddEditUserComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        event
      }
    });  
  }
}
