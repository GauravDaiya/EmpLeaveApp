import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee.service';
import { LeavesService } from '../../../core/services/leaves.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrl: './add-leave.component.scss'
})
export class AddLeaveComponent implements OnInit {
  
  LeaveForm!: FormGroup;
  public AllEmployeeData !: any[];

  constructor(
    private fb: FormBuilder,
    private empSrv: EmployeeService,
    private leaveSrv: LeavesService,
    private router: Router,
  ) {
    this.LeaveForm = this.fb.group({
      employeeId: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: [{ value: '', disabled: true }, [Validators.required]],
      noOfDays: ['', [Validators.required]],
      leaveType: ['', [Validators.required]],
      details: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.empSrv.GellAllEmployee().subscribe((EmpRes: any) => {
      this.AllEmployeeData = EmpRes.data;
      console.log(this.AllEmployeeData)
    });
    this.LeaveForm.get('fromDate')?.valueChanges.subscribe((fromDate) => {
      if (fromDate) {
        this.LeaveForm.get('toDate')?.enable();
        this.LeaveForm.get('toDate')?.setValue(null);
      } else {
        this.LeaveForm.get('toDate')?.disable(); 
        this.LeaveForm.get('toDate')?.setValue(null);
      }
    });
    this.LeaveForm.get('toDate')?.valueChanges.subscribe(() => this.calculateNoOfDays());
  }

  disableToDate = (date: Date | null): boolean => {
    if (!date) return false; // If no date is selected, allow all dates
    const fromDate = this.LeaveForm.get('fromDate')?.value;
    return fromDate ? date >= new Date(fromDate) : true; // Disable dates before fromDate
  };

  calculateNoOfDays(): void {
    const fromDate = this.LeaveForm.get('fromDate')?.value;
    const toDate = this.LeaveForm.get('toDate')?.value;
  
    if (fromDate && toDate) {
      const start = new Date(fromDate);
      const end = new Date(toDate);
      const timeDiff = end.getTime() - start.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 to include both start and end dates
  
      this.LeaveForm.get('noOfDays')?.setValue(daysDiff);
    } else {
      this.LeaveForm.get('noOfDays')?.setValue('');
    }
  }
  

  submitForm() {
    if(this.LeaveForm.valid) {
      this.leaveSrv.AddLeave(this.LeaveForm.value).subscribe((CreateLeaveRes:any) => {
        if(CreateLeaveRes){
          this.router.navigate(['/dashboard/view-leave'])
        }
      })
    } else {
      alert('Form is invalid');
    } 
  }
}
