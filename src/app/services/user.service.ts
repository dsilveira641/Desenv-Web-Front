import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(public override http: HttpClient) {
    super(http, 'User');
    this.entity = 'create/account';
  }

  public deleteUser(id: number): Observable<any> {
    this.entity = 'crud/delete/';
    return super.delete(id);
  }

  public createUser(data: any): Observable<any> {
    this.entity = 'crud/create/';
    return super.save(data);
  }
}
