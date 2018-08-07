import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EmployeeListComponent} from './employee/employee-list.component';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', redirectTo: ''},
  {path:'employee', component:EmployeeListComponent},
  {path:'employee/:id', component:AddEmployeeComponent},
  {path:'employee/details/:id', component:EmployeeDetailComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
