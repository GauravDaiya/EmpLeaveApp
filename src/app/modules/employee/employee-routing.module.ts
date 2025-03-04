import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-employee',
    pathMatch: 'full'
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,

  },
  {
    path: 'view-employee',
    component: ViewEmployeeComponent
  },
  {
    path: 'add-leave',
    component: AddLeaveComponent
  },
  {
    path: 'view-leave',
    component: ViewLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
