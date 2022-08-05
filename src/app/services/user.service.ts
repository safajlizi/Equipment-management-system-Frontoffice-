import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/users/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  postUser(data: any) {
    return this.http.post<any>(API_URL, data);
  }
  getUsers() {
    return this.http.get<any>(API_URL);
  }
  putUser(data: any, id: string) {
    return this.http.put<any>(API_URL + id, data);
  }
  deleteUser(id: string) {
    return this.http.delete<any>(API_URL + id);
  }
}
