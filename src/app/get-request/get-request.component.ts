import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {
totalAngularPackages:number;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').
subscribe( data => 
  {
    this.totalAngularPackages= data.total
  });

  }

}
