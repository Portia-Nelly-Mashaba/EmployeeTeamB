import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { DepartmentComponent } from './department/department.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MatCardModule,MatButtonModule,MatGridListModule, MatDialogModule],

  declarations: [ AppComponent, HelloComponent, EmployeeComponent, UpdateComponent, DepartmentComponent, MenuHeaderComponent, ProjectListComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
