import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'myapp-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit 
{

employees:Employee[]=[
  {Id:11, Name:'Sivarjun', EmployeeId:1121, Street1:'East',Street2:'Opp. Dominos',zip:523272,City:'Ongole',State:'A.P.'},
  {Id:12, Name:'Gopi', EmployeeId:8976, Street1:'West',Street2:'Behind Govt School',zip:523001,City:'Ongole',State:'A.P.'},
  {Id:13, Name:'Raju', EmployeeId:4545, Street1:'North',Street2:'Near Well',zip:526274,City:'Ongole',State:'A.P.'}
]
  constructor() { }

  ngOnInit() {
  }

}
