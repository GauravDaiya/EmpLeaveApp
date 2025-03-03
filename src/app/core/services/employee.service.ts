import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private isEditMode = new BehaviorSubject(false);
  public EditStatus$ = this.isEditMode.asObservable();

  private employeeToEdit = new BehaviorSubject<any>(null); 
  public employeeToEdit$ = this.employeeToEdit.asObservable();

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
    return this.http.post(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee`,data);
  }

  UpdateEmployee(data:any) {
    console.log(data)
    return this.http.put(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/UpdateEmployee`,data)
  }

  GellAllEmployee() {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees`)
  }

  GetEmployeeById(Empid:number) {
    return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployeeById`, {
      params: {id: Empid}
    })
  }

  DeleteEmployee(Empid: number) {
    return this.http.delete(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/DeleteEmployee`, {
      params: { id: Empid}
    });
  }

  ActiveEmployeeEditMode() {
    this.isEditMode.next(true)
  }

  setEmployeeToEdit(empId: number) {
    this.GetEmployeeById(empId).subscribe((res:any) => {
      this.employeeToEdit.next(res.data)
    })
  }

  ResetEmployeeEditMode() {
    this.isEditMode.next(false);
    this.employeeToEdit.next(null)
  }
}
