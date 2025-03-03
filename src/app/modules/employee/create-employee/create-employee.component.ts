import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  employeeForm!: FormGroup;
  public RolesData!: any[];
  public DepartmentData!: any[];

  constructor(
    private fb: FormBuilder,
    private empSrv: EmployeeService,
  ) {
    this.employeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emailId: ['', [Validators.required, Validators.email]],
      deptId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
    this.empSrv.GetAllRoles().subscribe((RolesRes: any) => {
      this.RolesData = RolesRes.data;
    });
    this.empSrv.GetAllDepartments().subscribe((DepartRes: any) => {
      this.DepartmentData = DepartRes.data;
    })
  }

  submitForm() {
    if (this.employeeForm.valid) {
      this.empSrv.CreateNewEmp(this.employeeForm.value).subscribe(res => {
        console.log('Employee added:', res);
        // this.router.navigate(['layout/dashboard/employee-detail']);
      }, error => {
        console.error('Error adding employee:', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
