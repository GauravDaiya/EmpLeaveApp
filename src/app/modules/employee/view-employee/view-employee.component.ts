import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent implements OnInit {

  public AllEmployeeData !: any[];
  public dataSource = new MatTableDataSource<any>();

  constructor(
    private empSrv: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empSrv.GellAllEmployee().subscribe((EmpRes: any) => {
      this.AllEmployeeData = EmpRes.data;
      this.dataSource.data = this.AllEmployeeData;
    })
  }

  displayedColumns = ['sn', 'empId', 'empName', 'empEmailId', 'department', 'role', 'mobile', 'actions'];

  onDelete(empId: number) {
    this.empSrv.DeleteEmployee(empId).subscribe((EmpDelRes: any) => {
      alert(EmpDelRes.message);
    })
  }

  onEdit(empId: number) {
    this.empSrv.ActiveEmployeeEditMode();
    this.empSrv.setEmployeeToEdit(empId); 
    this.router.navigate(['/dashboard/create-employee'])
  }
}
