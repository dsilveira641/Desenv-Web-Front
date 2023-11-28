import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public override http: HttpClient) {
    super(http, 'User');
    this.entity = "auth";
  }

  
}
