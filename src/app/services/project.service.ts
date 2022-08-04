import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  postProject(data:any){
    return this.http.post<any>("http://localhost:3000/project/",data);
  }
  getProjects(){
    return this.http.get<any>("http://localhost:3000/project/")
  }
  putProject(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/projectt/"+id,data)

  }
  deleteProject(id:number){
    return this.http.delete<any>("http://localhost:3000/project/"+id)

  }
}
