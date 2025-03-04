import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.service';
import { LeavesService } from '../../../core/services/leaves.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrl: './view-leave.component.scss'
})
export class ViewLeaveComponent implements OnInit {

  public AllLeavesData !:any [];
  public dataSource = new MatTableDataSource<any>();

  constructor(
    private empSrv: EmployeeService,
    private leaveSrv: LeavesService,
  ) { }

  ngOnInit(): void {
    this.leaveSrv.GetAllLeaves().subscribe((LeaveRes:any) => {
      this.AllLeavesData = LeaveRes.data;
      this.dataSource.data = this.AllLeavesData;
      console.log(this.AllLeavesData)
    })
  }

  displayedColumns = ['sn', 'employeeName', 'fromDate', 'toDate', 'noOfDays', 'leaveType', 'details', 'approvedDate', 'isApproved'];
}
