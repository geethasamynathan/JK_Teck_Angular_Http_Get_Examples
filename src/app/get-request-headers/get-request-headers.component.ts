import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-request-headers',
  templateUrl: './get-request-headers.component.html',
  styleUrls: ['./get-request-headers.component.css']
})
export class GetRequestHeadersComponent implements OnInit {
  totalAngularPackages;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const headers={'Authorization':'Bearer my-token','my-custom-header':'sampleheader'}

    
     this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular',{headers})
     .subscribe(data =>{
      
       this.totalAngularPackages= data.total;
     })
     console.log('packages'+this.totalAngularPackages)
  }

}
