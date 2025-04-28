import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { NewJobComponent } from './pages/new-job/new-job.component';
import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'jobs',
        component: JobsComponent
    },
    {
        path:'job-details/:jobid',
        component: JobDetailsComponent
    },
    {
        path:'new-job',
        component: NewJobComponent
    },
    {
        path:'job-listing',
        component: JobListingComponent
    },
    { 
        path:'my-jobs',
        component:MyJobsComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'**',
        component:HomeComponent
    }
];
