import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { ProjectListComponent } from '../project-list/project-list.component';

const appRoutes :Routes =[
  {path:'', component:EmployeeComponent}, 
  {path:'employee', component:EmployeeComponent}, 
  {path:'department', component:DepartmentComponent}, {path:'project-list', component:ProjectListComponent}];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }