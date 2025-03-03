import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
  ) { }

  GetAllRoles() {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles`);
  }

  GetAllDepartments() {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments`);
  }

  CreateNewEmp(data:any) {
    console.log(data)
    return this.http.post(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee`,data);
  }

  GellAllEmployee() {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees`)
  }
}
