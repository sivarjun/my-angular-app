import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { EmployeeService } from '../employee.service';

@Component({
  selector: 'myapp-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  user: any;
  currentUserId: number;
  constructor(private route: ActivatedRoute, private dataService: EmployeeService) { }

  ngOnInit() {
    this.currentUserId = +this.route.snapshot.params['id'];
    this.user=this.dataService.getUserById(this.currentUserId);
  }



}
