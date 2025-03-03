import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public isEditMode!:boolean;

  constructor(
    private empSrv: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.empSrv.EditStatus$.subscribe((Res:any) => {
      this.isEditMode = Res;
    })
  }
  
}
