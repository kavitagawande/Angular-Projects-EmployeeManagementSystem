import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;
  constructor( private route: ActivatedRoute,private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee;
    this.employeeService.getEmployeebyId(this.id).subscribe(data=>{
      console.log(data);
      this.employee = data;
      
      
    });
  }

}
