import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-employee',
    pathMatch: 'full'
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
