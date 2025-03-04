import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http: HttpClient,) { }

  AddLeave(data:any) {
    return this.http.post(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/AddLeave`,data)
  }

  GetAllLeaves() {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeaves`)
  }
}
