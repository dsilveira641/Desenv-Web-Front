import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  public userData = {
    USR_UserName: null,
    USR_Email: null,
    USR_Password: null
  };

  private id!: number;

  private destroy$ = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserService,
    private diagoRef: MatDialogRef<AddEditUserComponent>
  ) {
    console.log("[data]", data);
    
    this.id = this.data.event.USR_Id;
  }

  ngOnInit(): void {
    this.getData(this.id);
  }

  getData(id: number) {
    this.service
        .getById(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.userData = response;
          }
        })
  }

  updateUser() {
    this.service
        .edit(this.id, this.userData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.close();
          }
        });
  }

  close() {
    this.diagoRef.close();
  }
}
