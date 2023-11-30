import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public http: HttpClient) {
    this.http.get('http://localhost:3333').subscribe({
      next: (response: any) => {
        console.log(response)
      }
    })
  }

  title = 'projetoFront';
}
