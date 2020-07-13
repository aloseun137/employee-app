import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeCreate: Employee;
  submitted = false;
  

  constructor(private myService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    $('#submit').click(function() {
      $('.modal').removeClass('in');
      $('.modal').attr("aria-hidden","true");
      $('.modal').css("display", "none");
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');

   });

   this.employeeCreate =  new Employee()
    
    
  }
  save() {
    this.myService.createEmployee(this.employeeCreate)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employeeCreate = new Employee();
    this.gotoList();
  }

  onSubmit() {
    
    this.save()
  }
  

  gotoList(){
    this.router.navigate(['/employees']);
  }
}
