import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-request-error-handling',
  templateUrl: './get-request-error-handling.component.html',
  styleUrls: ['./get-request-error-handling.component.css']
})
export class GetRequestErrorHandlingComponent implements OnInit {
totalAngularPackages;
errorMessage;
error1:boolean=false;

  constructor(private http:HttpClient) { } 
  
  ngOnInit(): void {
    this.http.get<any>('https://api.npms.io/v2/')
    .subscribe({next:data => {
      this.totalAngularPackages =data.total;
    },
    error :err => {
      this.errorMessage=err.message;
      this.error1=true;
    }
  });
 
  }

}
