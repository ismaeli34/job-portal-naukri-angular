import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-new-job',
  imports: [ FormsModule,CommonModule],
  templateUrl: './new-job.component.html',
  styleUrl: './new-job.component.css'
})
export class NewJobComponent implements OnInit{

  

  constructor(private jobService:JobService){

    const userData = localStorage.getItem('jobLoginUser');
    if(userData !=null){
      const data = JSON.parse(userData);
      this.jobObj.EmployerId = data.employerId;

    }
  }
  jobObj:any ={
      "JobId": 0,
      "JobName": "",
      "CreatedDate": new Date(),
      "EmployerId": 0,
      "CategoryId": 0,
      "Experience": "",
      "Package": "",
      "Location": "",
      "JobDescription": "",
      "IsActive": true
  }

  categoryList:any []=[];

  ngOnInit(): void {

    this.getJobCategories();

  }

  createJob(){

    this.jobService.createNewJob(this.jobObj).subscribe((res:any)=>{
      if(res.result){
        alert('Post Created');
      }else{
        alert(res.message)
      }
    })

  }


  getJobCategories(){
    this.jobService.getAllCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })

  }

}
