import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/models/owner/owner.model';

const baseUrl = 'http://localhost:8080/api/owners';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(baseUrl);
  }

  getById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${baseUrl}/${id}`);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  
  findByName(name: string): Observable<any> {
    return this.http.get<Owner[]>(`${baseUrl}?name=${name}`);
  }

}
