import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    AddLeaveComponent,
    ViewLeaveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MaterialModule
  ],
})
export class EmployeeModule { }
