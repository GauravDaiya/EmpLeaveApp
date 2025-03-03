import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public isEditMode!:boolean;

  constructor(
    private empSrv: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empSrv.EditStatus$.subscribe((Res:any) => {
      this.isEditMode = Res;
    })
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
  
}
