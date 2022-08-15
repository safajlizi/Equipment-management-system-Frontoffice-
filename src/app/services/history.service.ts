import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }
  postHistory(data:any){
    return this.http.post<any>("http://localhost:3000/history/",data);
  }
  getHistory(){
    return this.http.get<any>("http://localhost:3000/history/")
  }
  putHistory(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/history/"+id,data)

  }
  deleteHistory(id:number){
    return this.http.delete<any>("http://localhost:3000/history/"+id)

  }
}