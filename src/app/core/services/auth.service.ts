import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  LoginEmployee(data:any) {
    return this.http.post(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login`,data)
  }
}
