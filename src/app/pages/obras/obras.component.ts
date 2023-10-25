import { Component } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent {

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
}
