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

  private apiUrl = "https://empleaveappnode.onrender.com/api/v1/user";

  constructor(
    private http: HttpClient,
  ) { }

  // GetAllRoles() {
  //   return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles`);
  // }

  // GetAllDepartments() {
  //   return this.http.get(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments`);
  // }

  CreateNewEmp(data:any) {
    return this.http.post(`http://localhost:5000/api/v1/user/CreateEmployee`,data);
  }

  UpdateEmployee(editId:any,data:any) {
    console.log(data)
    return this.http.patch(`${this.apiUrl}/UpdateEmp/${editId}`,data)
  }

  GellAllEmployee() {
    return this.http.get(`${this.apiUrl}/GetAllEmployees`)
  }

  GetEmployeeById(Empid:any) {
    return this.http.get(`${this.apiUrl}/GetEmpById/${Empid}`)
  }

  DeleteEmployee(Empid: any) {
    return this.http.delete(`${this.apiUrl}/DeleteEmployee/${Empid}`);
  }

  ActiveEmployeeEditMode() {
    this.isEditMode.next(true)
  }

  setEmployeeToEdit(empId: any) {
    this.GetEmployeeById(empId).subscribe((res:any) => {
      this.employeeToEdit.next(res.data.EmpById)
    })
  }

  ResetEmployeeEditMode() {
    this.isEditMode.next(false);
    this.employeeToEdit.next(null)
  }
}
