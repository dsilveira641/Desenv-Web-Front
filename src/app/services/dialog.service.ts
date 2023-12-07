import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirmation(message: string): MatDialogRef<any> {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '950px',
      data: message
    });
  }
}
