import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiEndPoint:string = 'https://freeapi.miniprojectideas.com/api/JobPortal/'
  

  constructor(private http:HttpClient) { }


  registerEmployer(obj:any){
    return this.http.post(this.apiEndPoint+'AddNewEmployer',obj)
  }


  registerAsJobSeeker(obj:any){
    return this.http.post(this.apiEndPoint+'AddNewJobSeeker',obj)
  }

  login(obj:any){
    return this.http.post(this.apiEndPoint+'Login',obj)
  }

  getAllCategory(){
    return this.http.get(this.apiEndPoint+'GetAllJobCategory')
  }

  createNewJob(obj:any){
   return this.http.post(this.apiEndPoint+'CreateNewJobListing',obj);
  }

  getActiveJobs(){
    return this.http.get(this.apiEndPoint+'GetActiveJobListing')
  }
  getJobListingById(jobid:number){
    return this.http.get(this.apiEndPoint+'GetJobListingById?jobId='+jobid);
  }

  sendJobApplication(obj:any){
    return this.http.post(this.apiEndPoint+'SendJobApplication',obj);
  }


  GetJobsByEmployerId(employerId:number){
    return this.http.get(this.apiEndPoint+'GetJobsByEmployerId?employerId='+employerId);
  }


}
