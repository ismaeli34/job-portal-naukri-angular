import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  imports: [ FormsModule,CommonModule,RouterModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {

  isLoggedIn:boolean = false;
  userInfo:any;
  jobList:any[]=[];


  constructor(private jobService: JobService){
    const userData = localStorage.getItem('jobLoginUser');
    if (userData != null) {
      this.userInfo = JSON.parse(userData);
      console.log('this.userInfo id : '+ this.userInfo.employerId);
      

      this.getJobsByEmployer();
    } 
 
  }

  getJobsByEmployer(){
    this.jobService.GetJobsByEmployerId(this.userInfo.employerId).subscribe((res:any)=>{
      this.jobList = res.data;
      console.log("job listing : " + this.jobList[0].package);
      
    })
  }

}
