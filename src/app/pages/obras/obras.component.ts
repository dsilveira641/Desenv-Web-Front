import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ObrasService } from 'src/app/services/obras.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AddEditObraComponent } from './add-edit-obra/add-edit-obra.component';
import { DialogService } from 'src/app/services/dialog.service';

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
  public tableInfo: any = [];

  private destroy$ = new Subject();

  constructor(
    public service: ObrasService,
    private dialog: MatDialog,
    private dialogService: DialogService
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
    })
    .afterClosed()
    .subscribe(resposne => this.listAll());
  }

  delete(obra: any) {            
    const confirmation = this.dialogService.confirmation("Deseja excluir ?");

    confirmation.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        this.service
            .deleteObra(obra.CTR_id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (response) => {
                this.listAll();
              }
            })
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
