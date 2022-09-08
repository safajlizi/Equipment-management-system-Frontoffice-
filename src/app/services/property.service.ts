import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {}
  postProperty(data: any) {
    return this.http.post<any>('http://localhost:3000/property/',data);
  }
  getProperty() {
    return this.http.get<any>('http://localhost:3000/property/');
  }
  getPropertyById(id:number) {
    return this.http.get<any>('http://localhost:3000/property/'+id);
  }

  patchProperty(data: any, id: number) {
    return this.http.patch<any>('http://localhost:3000/property/'+ id,data);
  }
  deleteProperty( id: number) {
    return this.http.delete<any>('http://localhost:3000/property/'+ id);
  }
}
