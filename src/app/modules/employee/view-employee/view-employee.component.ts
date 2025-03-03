import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent implements OnInit {

  public AllEmployeeData !: any [];
  public dataSource = new MatTableDataSource<any>();

  constructor(private empSrv: EmployeeService,) {}

  ngOnInit(): void {
    this.empSrv.GellAllEmployee().subscribe((EmpRes: any) => {
      this.AllEmployeeData = EmpRes.data;
      this.dataSource.data = this.AllEmployeeData;
     console.log(this.AllEmployeeData)
    })
  }

  displayedColumns = ['sn', 'empId', 'empName', 'empEmailId', 'department', 'role', 'mobile', 'actions'];

  onDelete(empId: number) {

  }

  onEdit(employee: any) {

  }
}
