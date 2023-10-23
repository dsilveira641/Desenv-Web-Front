import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public tableInfo = [
    {
      id: 1,
      user: 'João Victor',
      email: 'joao@teste.com'
    },
    {
      id: 2,
      user: 'Lucas Moreira',
      email: 'lucas@teste.com'
    },
    {
      id: 3,
      user: 'Pedro Henrique',
      email: 'pedro@teste.com'
    },
    {
      id: 4,
      user: 'Manuel Gomes',
      email: 'manueltse@gmail.com'
    }
  ]
}
