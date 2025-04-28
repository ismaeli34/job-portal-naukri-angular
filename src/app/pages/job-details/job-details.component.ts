import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  imports: [ FormsModule,CommonModule,RouterModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  activeJobId: number = 0;
  jobObj: any;
  isLoggedIn:boolean = false;
  userInfo:any;
  jobApplicationObj = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": "2025-04-27T21:26:32.896Z",
    "ApplcationStatus": "New"
  }

  constructor(private activatedRoute: ActivatedRoute,
    private jobService: JobService) {

    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId = this.userInfo.jobSeekerId;
      console.log("job seeker id - "+ this.jobApplicationObj.JobSeekerId);
      
    }
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeJobId = res.jobid;
      this.getJobDetail();
      this.jobApplicationObj.JobId = this.activeJobId;
    })
  }
  ngOnInit(): void {
  }


  getJobDetail() {
    this.jobService.getJobListingById(this.activeJobId).subscribe((res: any) => {
      this.jobObj = res.data;
    })

  }

  apply(){
    this.jobService.sendJobApplication(this.jobApplicationObj).subscribe((res:any)=>{
      if(res.result){
        alert('You have sucessfully applied to Job');
      } else{
        alert(res.message)
      }

  })
  }




}
