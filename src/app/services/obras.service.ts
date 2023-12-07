import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObrasService extends BaseService {

  constructor(public override http: HttpClient) {
    super(http, 'Construction');
    this.entity = "crud/create";
  }

  public deleteObra(id: number): Observable<any> {
    this.entity = 'crud/delete/';
    return super.delete(id);
  }
}
