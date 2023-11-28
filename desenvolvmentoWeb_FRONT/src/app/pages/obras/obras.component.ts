import { Component } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent {

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

  constructor(public service: ObrasService) {}

  public tableInfo = [
    {
      id: 1,
      constructions: 'OBRA DE TESTE',
      delivery: '30/02/2023',
      value: 'R$100',
      budget: 'R$200',
      status: 'ok'
    },
    {
      id: 2,
      constructions: 'OBRA DE TESTE',
      delivery: '30/02/2023',
      value: 'R$100',
      budget: 'R$200',
      status: 'ok'
    },
    {
      id: 3,
      constructions: 'OBRA DE TESTE',
      delivery: '30/02/2023',
      value: 'R$100',
      budget: 'R$200',
      status: 'ok'
    },
    {
      id: 4,
      constructions: 'OBRA DE TESTE',
      delivery: '30/02/2023',
      value: 'R$100',
      budget: 'R$200',
      status: 'ok'
    }
  ]

  public sendLoginData() {
    this.service.save(this.construction).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        
      }
    });
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
