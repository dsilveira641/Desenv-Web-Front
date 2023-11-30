import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public user: any = JSON.parse(localStorage.getItem('user') || "{}");
  protected entity!: string;

  constructor(
    protected http: HttpClient,
    public model: String
  ) {}

  public listAll(): Observable<any>{
    return this.http.get(this.apiUrl() + "/api/crud/list/all", this._headers());
  }
  
  public getById(id: number): Observable<any>{
    return this.http.get(this.apiUrl() + "/api/crud/list/" + id, this._headers());
  }

  public save(data: any): Observable<any> {
    return this.http.post(this.apiUrl() + "/api/" + this.entity, data, this._headers());
  }

  public edit(id: number, data: any): Observable<any> {
    return this.http.put(this.apiUrl() + "/api/crud/update/" + id, data, this._headers());
  }
  
  public apiUrl() {
    return environment.apiUrl;
  }

  private _headers() {
    let header = {
      'Content-Type': 'application/json',
      'model': `${this.model}`,
      'Authorization': ''
    }

    console.log(this.user)
    if (this.user.token) {
      header['Authorization'] = `Bearer ${this.user.token.token}`
    }
    return { headers: header };
  }
}
