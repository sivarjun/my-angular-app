import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators';

import { data } from '../employee/employe-data';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'myapp-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  gitUsers: any;
  constructor(private http: HttpClient, private dataService: EmployeeService) { }

  ngOnInit() {
    this.gitUsers = this.dataService.getUsers();
  }



}
