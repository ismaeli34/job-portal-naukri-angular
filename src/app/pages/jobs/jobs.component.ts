import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-jobs',
  imports: [HttpClientModule,FormsModule, CommonModule, RouterModule],

  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  jobList:any []=[];

  constructor(private jobService: JobService, 
              private router:Router){

  }
  ngOnInit(): void {
    this.loadJobs();

  }

  loadJobs(){
    this.jobService.getActiveJobs().subscribe((res:any)=>{
      this.jobList = res.data;
    })
  }

  openJob(id:number){
    this.router.navigate(['/job-details',id])

  }



}
