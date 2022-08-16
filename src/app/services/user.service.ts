import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  postUser(data: any) {
    return this.http.post<any>('http://localhost:3000/users/', data);
  }
  getUsers() {
    return this.http.get<any>('http://localhost:3000/users/');
  }
  putUser(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/users/' + id, data);
  }
  patchUser(data: any, id: number) {
    return this.http.patch<any>('http://localhost:3000/users/' + id, data);
  }
  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/users/' + id);
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}

