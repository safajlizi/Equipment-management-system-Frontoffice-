import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  filter(filterValue: string): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/project/filter/' + filterValue
    );
  }
  constructor(private http: HttpClient) {}
  postProject(data: any) {
    return this.http.post<any>('http://localhost:3000/project/', data);
  }
  getProjects() {
    return this.http.get<any>('http://localhost:3000/project/');
  }
  putProject(data: any, id: string) {
    return this.http.put<any>('http://localhost:3000/project/' + id, data);
  }
  deleteProject(id: string) {
    return this.http.delete<any>('http://localhost:3000/project/' + id);
  }
  getProjectManager(id: string) {
    return this.http.get<any>('http://localhost:3000/project/manager/' + id);
  }
  getProjectMembers(id: string) {
    return this.http.get<any>('http://localhost:3000/project/members/' + id);
  }
  addProjectMember(id: string, userId: string | string[]) {
    return this.http.put<any>(
      'http://localhost:3000/project/members/' + id,
      typeof userId == typeof ''
        ? {
            memberId: userId,
          }
        : { memberIds: userId }
    );
  }
  getProjectEquipment(id: string) {
    return this.http.get<any>('http://localhost:3000/equipment/project/' + id);
  }
  removeProjectEquipment(projectId: string, equipmentId: string) {
    return this.http.patch<any>(
      'http://localhost:3000/project/equipment/' + projectId,
      { equipmentId: equipmentId }
    );
    
  }
  removeProjectMember(projectId: string, memberId: string) {
    return this.http.patch<any>(
      'http://localhost:3000/project/members/' + projectId,
      { memberId: memberId }
    );
    }
}

