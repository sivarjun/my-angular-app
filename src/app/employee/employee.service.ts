import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {data} from '../employee/employe-data';


@Injectable()
export class EmployeeService {

constructor(private http:HttpClient){}


getUsers():any{
   return data //this.http.get<Employee[]>('../employee/employe-data');
}


getUserById(id:number)
{
    return data.find(user => {
        return user.id ==id;
      });
}




}