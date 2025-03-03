import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule { }
