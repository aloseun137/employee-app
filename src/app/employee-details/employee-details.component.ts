import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  update_id: number;

  employee: Employee = this.singleEmployee.employee;

  constructor(private myService: EmployeeService, private singleEmployee: EmployeeListComponent) { }

  ngOnInit(): void {
    console.log(1);
    
    this.employee = new Employee();
    this.employeeDetails(this.update_id)
    console.log(this.employee.first_name);
    
  }

  employeeDetails(id: number){
    this.update_id = id;
    console.log(this.update_id);
    
    this.myService.getEmployee(id)
      .subscribe(data => {
        this.employee = data.data;
        console.log('d jhbibu');
        
        console.log(data.data);
        
        
      }, error => console.log(error));
      console.log(this.employee );
    
  }

  onSubmit(){

  }

}
