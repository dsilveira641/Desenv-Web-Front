import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ObrasService } from 'src/app/services/obras.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AddEditObraComponent } from './add-edit-obra/add-edit-obra.component';

export enum StatusObra {
  Conluido = "Concluido",
  Em_Andamento = "Em andamento",
}

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})

export class ObrasComponent implements OnInit {

  public construction = {
    obra: {
      CTR_Name: null,
      CTR_DeliveryForecast: null,
      CTR_AddedValue: null,
      CTR_AuthorizedBudget: null,
      CTR_Status: null,
    },
    materiais: [
      this.rowMaterial()
    ]
  };

  private destroy$ = new Subject();

  constructor(
    public service: ObrasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listAll();
  }

  private listAll() {
    this.service
        .listAll()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            console.log("[listAll]", response);    
            this.tableInfo = response;      
          }
        });
  }

  public tableInfo: any = [];

  public sendLoginData() {
    this.service.save(this.construction).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        
      }
    });
  }

  public openDialog(event: any) {      
    this.dialog.open(AddEditObraComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        event
      }
    });
  }

  public validateStatus(status: boolean) {
    if (status) return StatusObra.Conluido;
    return StatusObra.Em_Andamento;
  }

  public rowMaterial() {
    return {
      MTR_Name: null,
      MTR_Unit: null
    }
  }

  public addRowMaterial() {
    this.construction.materiais.push(this.rowMaterial());
  }

  public removeRowMaterial(index: number) {
    this.construction.materiais.splice(index, 1);
  }
}
