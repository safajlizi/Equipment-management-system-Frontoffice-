import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:3000/users/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}
  headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorage.getToken()}`,
    });
  }
  postUser(data: any) {
    return this.http.post<any>('http://localhost:3000/users/', data, {
      headers: this.headers(),
    });
  }
  getUsers() {
    return this.http.get<any>('http://localhost:3000/users/', {
      headers: this.headers(),
    });
  }
  putUser(data: any, id: string) {
    return this.http.put<any>('http://localhost:3000/users/' + id, data, {
      headers: this.headers(),
    });
  }
  patchUser(data: any, id: string) {
    return this.http.patch<any>('http://localhost:3000/users/' + id, data, {
      headers: this.headers(),
    });
  }
  deleteUser(id: string) {
    return this.http.delete<any>('http://localhost:3000/users/' + id, {
      headers: this.headers(),
    });
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
  resetPassword(id: string, data: any): Observable<any> {
    return this.http.patch(API_URL + 'password/' + id, data, {
      headers: this.headers(),
    });
  }
  changeUsername(id: string, username: string): Observable<any> {
    return this.http.patch(
      API_URL + 'username/' + id,
      { username: username },
      {
        headers: this.headers(),
      }
    );
  }
  getEquipsOfUser(id: string,data:any): Observable<any> {
    return this.http.post(API_URL + 'equipments/' + id,data);
  }
  getManagedProjects(id: string): Observable<any> {
    return this.http.get(API_URL + 'projects/managed/' + id);
  }
  //not works
  getMemberProjects(id: string): Observable<any> {
    return this.http.get(API_URL + 'projects/member/' + id);
  }
  filter(keyword: any): Observable<any> {
    return this.http.get(API_URL + 'filter/' + keyword);
  }
}
