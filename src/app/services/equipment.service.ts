import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private http: HttpClient) {}
  postEquipment(data: any) {
    return this.http.post<any>('http://localhost:3000/equipment/', data);
  }
  getEquipment() {
    return this.http.get<any>('http://localhost:3000/equipment/');
  }
  putEquipment(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/equipment/' + id, data);
  }
  patchEquipment(data: any, id: number) {
    return this.http.patch<any>('http://localhost:3000/equipment/' + id, data);
  }
  deleteEquipment(id: number) {
    return this.http.delete<any>('http://localhost:3000/equipment/' + id);
  }
  filterEquipment(keyword: string) {
    return this.http.get<any>('http://localhost:3000/equipment/' + keyword);
  }
  affectEquipToProjectUser(data:any) {
    return this.http.post<any>('http://localhost:3000/equipment/project/user/take',data);
  }
  returnEquipfromProjectUser(data:any) {
    return this.http.patch<any>('http://localhost:3000/equipment/project/user/return',data);
  }
  returnEquipfromProject(data:any) {
    return this.http.patch<any>('http://localhost:3000/equipment/project/return',data);
  }
  affectEquipToProject(data:any) {
    
    return this.http.post<any>('http://localhost:3000/equipment/project/take',data);
  }
  getEquipmentByProject(id:string) {
    return this.http.get<any>('http://localhost:3000/equipment/project/'+id);
  }
}
