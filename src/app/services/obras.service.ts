import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObrasService extends BaseService {

  constructor(public override http: HttpClient) {
    super(http, 'Construction');
    this.entity = "crud/create";
  }
}
