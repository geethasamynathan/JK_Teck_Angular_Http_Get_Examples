import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-request-type-based',
  templateUrl: './get-request-type-based.component.html',
  styleUrls: ['./get-request-type-based.component.css']
})
export class GetRequestTypeBasedComponent implements OnInit {
totalAngularPackages;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.http.get<SearchResult>('https://api.npms.io/v2/search?q=scope:angular')
     .subscribe(data =>{
       this.totalAngularPackages= data.total;
     })
  }

}

 interface SearchResult
 {
   total:number;
   results:Array<object>;
   
 }