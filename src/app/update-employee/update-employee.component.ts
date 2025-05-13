import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeebyId(this.id).subscribe(data =>{
      console.log(data);
      this.employee = data;
      (error: any) => console.log(error)
    });

  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe((data: any)=>{
      console.log(data);
      this.employee = new Employee;
      this.goToEmployeeList();
      (error: any) => console.log(error)
    })
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"])
  }

  onSubmit(){
    this.updateEmployee();
  }

}

