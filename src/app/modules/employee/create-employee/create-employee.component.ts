import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  employeeForm!: FormGroup;
  public RolesData!: any[];
  public DepartmentData!: any[];
  public isEditMode!: boolean;
  public EditEmployeeData: any = null;

  constructor(
    private fb: FormBuilder,
    private empSrv: EmployeeService,
    private router: Router
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
  ngOnDestroy(): void {
    this.empSrv.ResetEmployeeEditMode();
    
  }
  ngOnInit(): void {
    this.empSrv.EditStatus$.subscribe((Res: any) => {
      this.isEditMode = Res;
    })
    this.empSrv.employeeToEdit$.subscribe((editEmpRes: any) => {
      if (editEmpRes) {
        this.EditEmployeeData = editEmpRes;
        this.employeeForm.patchValue({
          ...this.EditEmployeeData,
          gender: this.EditEmployeeData.gender.toLowerCase() 
        });
      }
    });

    this.empSrv.GetAllRoles().subscribe((RolesRes: any) => {
      this.RolesData = RolesRes.data;
    });
    this.empSrv.GetAllDepartments().subscribe((DepartRes: any) => {
      this.DepartmentData = DepartRes.data;
    })
  }

  submitForm() {
    if (this.employeeForm.valid) {
      if (this.isEditMode) {
        const EditEmpData = { ...this.employeeForm.value, employeeId: this.EditEmployeeData.employeeId };
        this.empSrv.UpdateEmployee(EditEmpData).subscribe((UpdRes: any) => {
          this.router.navigate(['/dashboard/view-employee'])
        })
      } else {
        this.empSrv.CreateNewEmp(this.employeeForm.value).subscribe(res => {
          if(res) {
            this.router.navigate(['/dashboard/view-employee'])
          }
        }, error => {
          console.error('Error adding employee:', error);
        });
      }

    } else {
      alert('Form is invalid');
    }
  }
}
