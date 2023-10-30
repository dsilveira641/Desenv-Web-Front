import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {

  @Input() title: string = "Usuário" || "Obras";
  
  public modal: any = "";

  constructor() {
    if (this.title == 'Usuário') {       
      this.modal = 'user-crud';
    }
    else {
      this.modal = 'obra-crud';
    }
  }

}
