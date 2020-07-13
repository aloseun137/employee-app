import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
declare var $: any;


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 
  

  constructor() { }

  ngOnInit(): void {
   
  }
  

}
