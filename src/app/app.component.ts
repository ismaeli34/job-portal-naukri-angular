import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,HttpClientModule,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-portal-angular';
  isLoggedIn:boolean = false;
  userInfo:any;

  constructor(){

    const userData = localStorage.getItem('jobLoginUser');
    console.log("user data"+ userData);
    
    if(userData ==null){
      this.isLoggedIn =false;
    }else{
      this.isLoggedIn =true;
      
      this.userInfo = JSON.parse(userData);
      console.log("this.userInfo - "+ this.userInfo.employerId);      
    }

  }


  logoff(){
    localStorage.removeItem('jobLoginUser');
    this.isLoggedIn = false;

  }
}
