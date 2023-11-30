import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-add-edit-obra',
  templateUrl: './add-edit-obra.component.html',
  styleUrls: ['./add-edit-obra.component.scss']
})
export class AddEditObraComponent implements OnInit {

  private id!: number;

  public construction = {
    obra: {
      CTR_Name: null,
      CTR_DeliveryForecast: null,
      CTR_AddedValue: null,
      CTR_AuthorizedBudget: null,
      CTR_Status: null,
      CTR_id: null
    },
    materiais: [
      this.rowMaterial()
    ]
  };

  private destroy$ = new Subject();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ObrasService
  ) {
    this.id = this.data.event.CTR_id ?? null;
  }
  
  ngOnInit(): void {
    console.log("[ngOnInit]", this.data);
    if (this.id) {
      this.getData();
    }
  }

  private getData() {
    this.service
        .getById(this.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            console.log("[getData]", response);
            this.construction.obra = response;            
          }
        });        
  }

  public addRowMaterial() {
    this.construction.materiais.push(this.rowMaterial());
  }

  public removeRowMaterial(index: number) {
    this.construction.materiais.splice(index, 1);
  }

  public rowMaterial() {
    return {
      MTR_Name: null,
      MTR_Unit: null
    }
  }  

  save() {
    console.log("[save]", this.construction);
    const method = (this.construction.obra.CTR_id) ? this.service.edit(this.construction.obra.CTR_id, this.construction.obra) : this.service.save(this.construction.obra);

    method
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        console.log("[save]", response);        
      }
    });
  }
}
function moment(CTR_DeliveryForecast: any): null {
  throw new Error('Function not implemented.');
}

