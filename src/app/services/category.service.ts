import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}
  postCategoy(data: any) {
    return this.http.post<any>('http://localhost:3000/category/',data);
  }
  getCategory() {
    return this.http.get<any>('http://localhost:3000/category/');
  }
  getCategoryById(id:number) {
    return this.http.get<any>('http://localhost:3000/category/'+id);
  }

  patchCategory(data: any, id: number) {
    return this.http.patch<any>('http://localhost:3000/category/'+ id,data);
  }
  deleteCategory( id: number) {
    return this.http.delete<any>('http://localhost:3000/category/'+ id);
  }
}
