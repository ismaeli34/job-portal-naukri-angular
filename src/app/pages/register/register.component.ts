import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  employeeObj: any = {

    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "MobileNo": "",
    "PhoneNo": "",
    "CompanyAddress": "",
    "City": "",
    "State": "",
    "PinCode": "",
    "LogoURL": "",
    "GstNo": ""
  }
  isJobSeeker:boolean =true;
  JobSeekerObj:any ={

  "JobSeekerId": 0,
  "FullName": "",
  "EmailId": "",
  "MobileNo": "",
  "ExperienceStatus": "",
  "ResumeUrl": "",
  "JobSeekerSkills": [],
  "JobSeekerWorkExperiences": []

  }

  constructor(private jobService:JobService){

  }

  register(){
    this.jobService.registerEmployer(this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message)
      }else{
        alert(res.message)
      }
    })
  }


  registerAsJobSeeker(){
    this.jobService.registerAsJobSeeker(this.JobSeekerObj).subscribe((res:any)=>{
      if(res.result){
        alert(res.message)
      }else{
        alert(res.message)
      }
    })

  }

}


